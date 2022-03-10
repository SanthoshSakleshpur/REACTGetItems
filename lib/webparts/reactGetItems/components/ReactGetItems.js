var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './ReactGetItems.module.scss';
import * as jquery from 'jquery';
var ReactGetItems = /** @class */ (function (_super) {
    __extends(ReactGetItems, _super);
    function ReactGetItems(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            items: [{
                    "EmployeeName": "",
                    "EmployeeId": "",
                    "Experience": "",
                    "Location": "",
                }]
        };
        return _this;
    }
    ReactGetItems.prototype.componentDidMount = function () {
        console.log('first--->', this.props.siteurl + "/_api/web/lists/getbytitle('Department')/items");
        var reactHandler = this;
        jquery.ajax({
            url: this.props.siteurl + "/_api/web/lists/getbytitle('Department')/items",
            type: 'GET',
            headers: { Accept: 'application/json; odata=verbose;' },
            success: function (resultData) {
                console.log('resultData--->', resultData);
                reactHandler.setState({
                    items: resultData.d.results,
                });
            },
            error: function (jqXHR, textStatus, errorThrown) { },
        });
    };
    ReactGetItems.prototype.render = function () {
        var _a = this.props, description = _a.description, siteurl = _a.siteurl;
        return (React.createElement("div", { className: styles.panelStyle },
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("div", { className: styles.tableCaptionStyle },
                ' ',
                "Demo : Retrieve SharePoint List Items using SPFx , REST API & React JS",
                ' '),
            React.createElement("br", null),
            React.createElement("div", { className: styles.headerCaptionStyle }, " Employee Details"),
            React.createElement("div", { className: styles.tableStyle },
                React.createElement("div", { className: styles.headerStyle },
                    React.createElement("div", { className: styles.CellStyle }, "Employee Name"),
                    React.createElement("div", { className: styles.CellStyle }, "Employee Id "),
                    React.createElement("div", { className: styles.CellStyle }, "Experience"),
                    React.createElement("div", { className: styles.CellStyle }, "Location")))));
    };
    return ReactGetItems;
}(React.Component));
export default ReactGetItems;
//# sourceMappingURL=ReactGetItems.js.map