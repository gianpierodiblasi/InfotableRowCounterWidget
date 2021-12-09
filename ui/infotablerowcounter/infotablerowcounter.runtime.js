/* global TW */
TW.Runtime.Widgets.infotablerowcounter = function () {
  var thisWidget = this;

  this.runtimeProperties = function () {
    return {
      'needsDataLoadingAndError': false
    };
  };

  this.renderHtml = function () {
    var html = '';
    html = '<div class="widget-content widget-infotablerowcounter" style="display:none;"></div>';
    return html;
  };

  this.serviceInvoked = function (serviceName) {
    if (serviceName === 'Evaluate') {
      var infotable = thisWidget.getProperty('infotable');
      var debugMode = thisWidget.getProperty('debugMode');
      var value = thisWidget.getProperty('value');

      if (debugMode) {
        console.log("InfotableRowCounter - infotable = ");
        console.log(infotable);
      }

      var rowCount = 0;
      if (infotable && infotable.rows) {
        rowCount = infotable.rows.length;
      }
      thisWidget.setProperty('rowCount', rowCount);
      thisWidget.setProperty('eqZero', rowCount === 0);
      thisWidget.setProperty('eqOne', rowCount === 1);
      thisWidget.setProperty('gtZero', rowCount > 0);
      thisWidget.setProperty('gtOne', rowCount > 1);
      thisWidget.setProperty('eqValue', rowCount === value);
      thisWidget.setProperty('gtValue', rowCount > value);
      thisWidget.setProperty('ltValue', rowCount < value);

      if (debugMode) {
        console.log("InfotableRowCounter - rowCount = " + rowCount);
      }

      thisWidget.jqElement.triggerHandler("Evaluated");

      if (rowCount === 0) {
        thisWidget.jqElement.triggerHandler('EqZero');
      }
      if (rowCount === 1) {
        thisWidget.jqElement.triggerHandler('EqOne');
      }
      if (rowCount > 0) {
        thisWidget.jqElement.triggerHandler('GtZero');
      }
      if (rowCount > 1) {
        thisWidget.jqElement.triggerHandler('GtOne');
      }
      if (rowCount === value) {
        thisWidget.jqElement.triggerHandler('EqValue');
      }
      if (rowCount > value) {
        thisWidget.jqElement.triggerHandler('GtValue');
      }
      if (rowCount < value) {
        thisWidget.jqElement.triggerHandler('LtValue');
      }
    }
  };

  this.updateProperty = function (updatePropertyInfo) {
    if (updatePropertyInfo.TargetProperty === 'infotable') {
      this.setProperty("infotable", updatePropertyInfo.RawSinglePropertyValue);
    } else if (updatePropertyInfo.TargetProperty === 'value') {
      this.setProperty("value", updatePropertyInfo.RawSinglePropertyValue);
    }
  };
};