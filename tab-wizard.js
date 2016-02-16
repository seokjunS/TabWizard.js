/***********************************
* tab wizard
* tabs => array of tabs'id
** required format format: {
  tab's id : 'example-tab',
  tab-panel's id : 'example'
}
***********************************/

'use strict';

(function ( $ ) {
  // Define class
  var TabWizard = function (options) {
    this.wrapper             = null; // wrapper element
    this.tabs                = []; // tab objects
    this.progressBar         = null; // progress bar element
    this.prevButton          = null; // prev button element
    this.nextButton          = null; // next button element

    // private
    this.tabIndex            = 0;
    this.minIndex            = 0;
    this.maxIndex            = null;
    this.tabPanels           = []; // tab panel objects

    $.extend(true, this, options);
    this.init();
  };

  // extension
  $.fn.TabWizard = function (options) {
    return new TabWizard( $.extend( options, { wrapper: this } ) );
  };

  TabWizard.prototype.init = function() {
    var self = this;
    // set index
    this.maxIndex = this.tabs.length - 1;
    // tab inter
    $.each(this.tabs, function (idx, tabId) {
      // set tab-panels
      self.tabPanels.push( tabId.slice(0, -4) );

      // set tab click listener
      $("#"+tabId).click(function ($event) {
        if (self.tabIndex === idx) {
          // do nothing
          $event.preventDefault();
          $event.stopPropagation();
        }
        else {
          self.tabIndex = idx;
          self.changeProgress();
        }

      });
    });
    // button click event
    $("#"+this.prevButton).click(function ($event) {
      self.prev();
    })
    $("#"+this.nextButton).click(function ($event) {
      self.next();
    })

    // init progress
    this.changeProgress();
  };

  /*** 
    function getCurrentId
    return: Current tab's id
  ***/
  TabWizard.prototype.getCurrentId = function() {
    return this.tabs[ this.tabIndex ];
  };

  /*** 
    function getIndex
    return: Current tab index
  ***/
  TabWizard.prototype.getIndex = function() {
    return this.tabIndex;
  };

  /*** 
    function changeProgress
    return: null
  ***/
  TabWizard.prototype.changeProgress = function() {
    var self = this;
    var progress = (this.tabIndex + 1) / (this.maxIndex + 1) * 100;
    var $progressBarElem = $("#"+this.progressBar);
    // set progress
    $progressBarElem.css({'width': progress + '%'});
    // set active tab
    $.each(this.tabs, function (idx, tabId) {
      var $tabElem = $("#"+tabId);
      if (idx <= self.tabIndex)
        $tabElem.addClass('active');
      else
        $tabElem.removeClass('active');
    });
    // set active buttons
    var $prevButtonElem = $("#"+this.prevButton);
    var $nextButtonElem = $("#"+this.nextButton);
    if (this.tabIndex === this.minIndex) {
      $prevButtonElem.attr('disabled', true);
      $nextButtonElem.attr('disabled', false);
    }
    else if (this.tabIndex === this.maxIndex) {
      $prevButtonElem.attr('disabled', false);
      $nextButtonElem.attr('disabled', true); 
    }
    else {
      $prevButtonElem.attr('disabled', false);
      $nextButtonElem.attr('disabled', false);
    }
  };

  /*** 
    function tab
    return: null
  ***/
  TabWizard.prototype.tab = function(to) {
    if (to !== null && to !== undefined) {
      this.tabIndex = to; 
    }

    var $tabElem = $("#"+this.tabs[ this.tabIndex ]);
    $tabElem.tab('show');
    this.changeProgress();
  };

  /*** 
    function prev
    return: null
  ***/
  TabWizard.prototype.prev = function() {
    if ( this.tabIndex > this.minIndex ) {
      this.tabIndex--;
      this.tab();
    }
  };

  /*** 
    function next
    return: null
  ***/
  TabWizard.prototype.next = function() {
    if ( this.tabIndex < this.maxIndex ) {
      this.tabIndex++;
      this.tab();
    }
  };



}(jQuery));
