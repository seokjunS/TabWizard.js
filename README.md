# TabWizard.js

## Bootstrap extended tab wizard

### tab wizard options:
1. tabs
  * Array of tab element's id string
2. progressBar
  * Progress bar's id string
3. prevButton
  * Previous button's id string
4. nextButton
  * Next button's id string

### examples:
```javascript
tabWizard = $("#new-form").TabWizard({
  tabs: ['experiment-panel-tab', 'option-panel-tab', 'input-panel-tab', 'launch-panel-tab'],
  progressBar: "progress-bar",
  prevButton: "prev-button",
  nextButton: "next-button"
});
```
