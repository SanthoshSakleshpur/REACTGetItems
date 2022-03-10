import * as React from 'react';
import styles from './ReactGetItems.module.scss';
import {
  IReactGetItemsProps,
  IReactGetItemsState,
} from './IReactGetItemsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as jquery from 'jquery';

export default class ReactGetItems extends React.Component<
  IReactGetItemsProps,
  IReactGetItemsState> {
  public constructor(props: IReactGetItemsProps) {
    super(props);
    this.state = {
      items: [
        {
          Title: '',
          Department: '',
        },
      ],
    };
  }

  public componentDidMount() {
    var reactHandler = this;
    jquery.ajax({
      url: `${this.props.siteurl}/_api/web/lists/getbytitle('Department')/items`,
      type: 'GET',
      headers: { Accept: 'application/json; odata=verbose;' },
      success: (resultData) => {
        reactHandler.setState({
          items: resultData.d.results,
        });
      },
      error: (jqXHR, textStatus, errorThrown) => {},
    });
  }

  public render(): React.ReactElement<IReactGetItemsProps> {
    const {
      description,
      siteurl
    } = this.props;

    return (
      <div className={styles.panelStyle}>
        <div className={styles.tableStyle}>
          <div className={styles.headerStyle}>
            <div className={styles.CellStyle}>Title</div>
            <div className={styles.CellStyle}>Department</div>
          </div>

          {this.state?.items.map(function (item) {
            return (
              <div className={styles.rowStyle} key={item.Title}>
                <div className={styles.CellStyle}>{item.Title}</div>
                <div className={styles.CellStyle}>{item.Department}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
