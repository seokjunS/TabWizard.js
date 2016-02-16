# TabWizard.js

## Bootstrap extended tab wizard

#### Options:
1. tabs
  * Array of tab element's id string
2. progressBar
  * Progress bar's id string
3. prevButton
  * Previous button's id string
4. nextButton
  * Next button's id string

#### Restriction:
Corresponding tab panel's id should be same as tab's id without "-tab".<br>
For example, if tab's id is "hello-tab", corresponding tab panel's id should be "haha"

#### Examples:
```javascript
tabWizard = $("#new-form").TabWizard({
  tabs: ['experiment-panel-tab', 'option-panel-tab', 'input-panel-tab', 'launch-panel-tab'],
  progressBar: "progress-bar",
  prevButton: "prev-button",
  nextButton: "next-button"
});
```
