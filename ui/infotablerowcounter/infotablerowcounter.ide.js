/* global TW */
TW.IDE.Widgets.infotablerowcounter = function () {
  this.widgetIconUrl = function () {
    return '../Common/extensions/InfotableRowCounterWidget/ui/infotablerowcounter/infotable.png';
  };

  this.widgetProperties = function () {
    return {
      'name': 'InfotableRowCounter',
      'description': 'Widget to get the rows number of an infotable',
      'category': ['Common'],
      'iconImage': 'infotable.png',
      'properties': {
        'Width': {
          'description': 'width',
          'defaultValue': 200
        },
        'Height': {
          'description': 'height',
          'defaultValue': 28
        },
        'infotable': {
          'isVisible': true,
          'baseType': 'INFOTABLE',
          'isBindingTarget': true,
          'isEditable': false,
          'description': 'The infotable'
        },
        'debugMode': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isEditable': true,
          'defaultValue': false,
          'description': 'true to activate the debug'
        },
        'rowCount': {
          'isVisible': true,
          'baseType': 'INTEGER',
          'isBindingSource': true,
          'isEditable': false,
          'defaultValue': 0,
          'description': 'The infotable rows number'
        },
        'eqZero': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isBindingSource': true,
          'isEditable': false,
          'defaultValue': false,
          'description': 'true if the infotable has zero rows'
        },
        'eqOne': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isBindingSource': true,
          'isEditable': false,
          'defaultValue': false,
          'description': 'true if the infotable has one row'
        },
        'gtZero': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isBindingSource': true,
          'isEditable': false,
          'defaultValue': false,
          'description': 'true if the infotable has at least one row'
        },
        'gtOne': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isBindingSource': true,
          'isEditable': false,
          'defaultValue': false,
          'description': 'true if the infotable has more than one row'
        },
        'eqValue': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isBindingSource': true,
          'isEditable': false,
          'defaultValue': false,
          'description': 'true if the infotable has the rows number set into the "value" property'
        },
        'gtValue': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isBindingSource': true,
          'isEditable': false,
          'defaultValue': false,
          'description': 'true if the infotable has more rows than the value set into the "value" property'
        },
        'ltValue': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isBindingSource': true,
          'isEditable': false,
          'defaultValue': false,
          'description': 'true if the infotable has less rows than the value set into the "value" property'
        },
        'value': {
          'isVisible': true,
          'baseType': 'INTEGER',
          'isBindingTarget': true,
          'isEditable': true,
          'description': 'The rows number to use as comparison for eqValue, gtValue and ltValue',
          'defaultValue': 0
        }
      }
    };
  };

  this.widgetServices = function () {
    return {
      'Evaluate': {
        'warnIfNotBound': true
      }
    };
  };

  this.widgetEvents = function () {
    return {
      'Evaluated': {},
      'EqZero': {},
      'EqOne': {},
      'GtZero': {},
      'GtOne': {},
      'EqValue': {},
      'GtValue': {},
      'LtValue': {}
    };
  };

  this.renderHtml = function () {
    return '<div class="widget-content widget-infotablerowcounter">' + '<span class="infotablerowcounter-property">Infotable Row Counter</span>' + '</div>';
  };
};