# InfotableRowCounterWidget
An extension to get the rows number of an infotable.

**This Extension is provided as-is and without warranty or support. It is not part of the PTC product suite and there is no PTC support.**

## Description
This extension provides a widget to get the rows number of an infotable.

## Properties
- debugMode - BOOLEAN (default = false): if set to true it sends to the browser's JS console a set of information useful for debugging the widget
- infotable - INFOTABLE (no default value): the infotable
- rowCount - INTEGER (default = 0): the infotable rows number
- eqZero - BOOLEAN (default = false): true if the infotable has zero rows
- eqOne - BOOLEAN (default = false): true if the infotable has one row
- gtZero - BOOLEAN (default = false): true if the infotable has at least one row
- gtOne - BOOLEAN (default = false): true if the infotable has more than one row
- eqValue - BOOLEAN (default = false): true if the infotable has the rows number set into the "value" property
- gtValue - BOOLEAN (default = false): true if the infotable has more rows than the value set into the "value" property
- ltValue - BOOLEAN (default = false): true if the infotable has less rows than the value set into the "value" property
- value - INTEGER (default = 0): the rows number to use as comparison for eqValue, gtValue and ltValue

## Services
- Evaluate: service to perform the row count evaluation

## Events
- Evaluated: event to notify that the evaluation is completed
- EqZero: event thrown when the infotable has zero rows
- EqOne: event thrown when the infotable has one row
- GtZero: event thrown when the infotable has at least one row
- GtOne: event thrown when the infotable has more than one row
- EqValue: event thrown when the infotable has the rows number set into the "value" property
- GtValue: event thrown when the infotable has more rows than the value set into the "value" property
- LtValue: event thrown when the infotable has less rows than the value set into the "value" property

## Donate
If you would like to support the development of this and/or other extensions, consider making a [donation](https://www.paypal.com/donate/?business=HCDX9BAEYDF4C&no_recurring=0&currency_code=EUR).
