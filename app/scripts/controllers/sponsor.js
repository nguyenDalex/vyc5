'use strict';

/*global $:false */

/**
 * @ngdoc function
 * @name vyc5AngularApp.controller:SponsorCtrl
 * @description
 * # SponsorCtrl
 * Controller of the vyc5AngularApp
 */
angular.module('vyc5AngularApp')
  .controller('SponsorCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];



var commonLib = function(){
    /**
     * originally from http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
     * Format Currency
     * This function will format the given number to currency format (ex: 5000 -> $5,000.00)
     * 
     *
     * @param {Number} goalAmount The Goal amount, this represents the 100% mark
     * @param {Number} how many decimal points. ex: input is (2000, 0) then output is $2,000
     * @param {Number} separator for decimal point. ex: 300 --> 300.00
     * @param {String} separator for the nth thousands
     *
     */
    function formatCurrency(n, c, d, t) {

        var s, i, j;

        c = isNaN(c = Math.abs(c)) ? 2 : c;
        d = d === undefined ? '.' : d;
        t = t === undefined ? ',' : t;

        s = n < 0 ? '-' : '';
        i = parseInt(n = Math.abs(+n || 0).toFixed(c), 10) + '';
        j = (j = i.length) > 3 ? j % 3 : 0;

        return s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
    }

    return { formatCurrency: formatCurrency };
}();


var fundraising = function(){

    var fundraisingCore = function(){
        var _goals = [{'elementId': 'goal', 'amount': 100000, 'displayText' : 'Our Goal'},
            {'elementId': 'midGoal', 'amount': 70000, 'displayText' : 'Great'},
            {'elementId': 'minGoal', 'amount': 40000, 'displayText' : 'Good'}];
        var _ultimateGoal = 100000;
        var _progressAmount = 0;
        var _styleKey = 'height';

        function fundraisingBoard(thermoOptions, donations)
        {
            // sample input format
            /*var donations = { 
                'donations' : 
                    [ 
                       {'name': 'John Smith', 
                       'amount': 10000.00}, 
                       {'name': 'Joe Doe', 
                       'amount': 2000.00}
                    ],
                'total' : 12000,
                'goals' : [{'elementId': 'goal', 'amount': 100000, 'displayText' : 'Outstanding'},
                        {'elementId': 'midGoal', 'amount': 70000, 'displayText' : 'Great'},
                        {'elementId': 'minGoal', 'amount': 40000, 'displayText' : 'Good'}]
            };
            */
            // generate goals
            // sort goals to ensure the largest amount goes first
            // sort by descending order
            donations.goals.sort(function(a, b){
                return b.amount-a.amount;
            });

            _goals = donations.goals;

            thermometer(thermoOptions.id, null, donations.total, thermoOptions.animate);
            // add table
            var $thermo = $('#' + thermoOptions.id);
        }

        /**
         * Thermometer Progress meter.
         * This function will update the progress element in the 'thermometer'
         * to the updated percentage.
         * If no parameters are passed in it will read them from the DOM
         *
         * @param {Number} goalAmount The Goal amount, this represents the 100% mark
         * @param {[{Object}]} array of goal object {'amount':{Number}, 'display': {String}}
         * @param {Number} progressAmount The progress amount is the current amount
         * @param {Boolean} animate Whether to animate the height or not
         *
         */
        function thermometer(id, goals, progressAmount, animate) {
            

            var $thermo = $('#'+id),
                $progress = $('<div class=\"prog\"><div class=\"amount\"><span class=\"label\"></span></div></div>'),
                percentageAmount,
                isHorizontal = $thermo.hasClass('horizontal'),
                newCSS = {},
                $track = $('<div class=\"track\"></div>');
            
            _goals = goals ? goals : _goals;
            _styleKey = isHorizontal ? 'width' : 'height';

            //add goals and progress containers
            var i=0, n=_goals.length;
            var goal = _goals[i],
                tempGoalAmount = goal.amount,
                targetElement,
                goalDiv = '<div class=\"subGoal\" id=\"' + goal.elementId + '\"><div class=\"amount\"></div></div>';
            
            if (i===0)
            {
                $track.append('<div class=\"goal\" id=\"' + goal.elementId + '\"><div class=\"amount\"><span class=\"label\"></span></div>');
                goal['weight'] = 100;
                _ultimateGoal = tempGoalAmount;
            }

            $('#' + goal.elementId, $track).find('.amount').html( '$' + commonLib.formatCurrency( tempGoalAmount, 0, null ) + ' <span>' + goal.displayText + '</span>');
            
            
            $thermo.append($track.append($progress));
            
            
            updateProgressAmount(progressAmount, animate);
        }

        function updateProgressAmount(progressAmount, animate){
            _progressAmount = progressAmount ? progressAmount : _progressAmount;

            var percentageAmount = Math.min( Math.round(_progressAmount / _ultimateGoal * 1000) / 10, 100);
            var newCSS = {};
            var $progress = $('.prog');
            var reachedGoal = _progressAmount >= _ultimateGoal;
            var displayText =  ' <span>' + (reachedGoal ? ' Goal reached!!!' : ' Raised so far') + '</span>';
            

            $progress.find('.amount').html( '$' + commonLib.formatCurrency( _progressAmount, 0, null ) + displayText);

            //let's set the progress indicator
            $progress.find('.amount').hide();
            newCSS[_styleKey] = percentageAmount + '%';

            //set progress text color and progress bar color
            $('.thermometer .prog').css('background', 'rgba(231,76,60,0.8)'); //red
            $('.thermometer .prog .amount').css('color', '#E74C3C'); //red

            if (animate !== false) {
                $progress.animate( newCSS, 1200, function(){
                    $(this).find('.amount').fadeIn(500);
                });
            }
            else {
                $progress.css( newCSS );
                $progress.find('.amount').fadeIn(500);
            }
        }

        return {
            fundraisingBoard : fundraisingBoard,
            thermometer : thermometer,
            updateProgressAmount : updateProgressAmount
        };
    }(); // end thermoCore



//https://spreadsheets.google.com/feeds/list/1x92-I09WyEMMB-XKKZF5jaOg96mJ0nQvyN_kZ0sA4O4/1/public/basic?alt=json-in-script
var googleDocInfo = {
    'key':'1x92-I09WyEMMB-XKKZF5jaOg96mJ0nQvyN_kZ0sA4O4'
};

function getGoogleDocFeed()
{
    // Retrieve the JSON feed.
    var script = document.createElement('script');


    script.setAttribute('src', 'https://spreadsheets.google.com/feeds/list/' + googleDocInfo.key
                         + '/1/public/basic' +
                        '?alt=json-in-script&callback=getFundraisingData');

    script.setAttribute('id', 'jsonScript');
    script.setAttribute('type', 'text/javascript');
    document.documentElement.firstChild.appendChild(script);;
}

var init = function(){
    /* retrieving data from google doc */
    getGoogleDocFeed();
    $('#btnDonate').click(function(){
        window.open('Donate', '_blank');
    });
};

    return {init: init, updateFundraisingBoard: fundraisingCore.fundraisingBoard};
}();

var getFundraisingData = function(json) {
    var fundraisingData = {
        'donations' : 
            [],
        'total' : 0,
        'goals' : [{'elementId': 'goal', 'amount': 100000, 'displayText' : 'Our Goal'},
                    {'elementId': 'midGoal', 'amount': 70000, 'displayText' : 'Great!!'},
                    {'elementId': 'minGoal', 'amount': 40000, 'displayText' : 'Good!'}]
    };

    for (var i = 0; i < json.feed.entry.length; i++) {
        var entry = json.feed.entry[i];
        var donatedDate = entry.title.$t;
        var rowData = entry.content.$t;
        var cellData = rowData.split(',');
        var donateRecord = {'date': donatedDate};
        for (var iCell = 0; iCell < cellData.length; iCell++)
        {
            var colData = cellData[iCell].split(':');
            var colName = colData[0];
            var colValue = colData[1];
            if (colName.trim()==='grandtotal')
            {
                fundraisingData.total = colValue;
            }
            else
            {
                donateRecord[colName] = colValue;
            }
        }
        fundraisingData.donations.push(donateRecord);
    }

    // instantiate frundraisingBoard
    fundraising.updateFundraisingBoard({'id': 'thermo2', 'animate' : true}, fundraisingData);
}

    fundraising.init();
  });
