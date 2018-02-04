(function () {
    'use strict';

    angular
        .module('fuse')
        .factory('ReportBuilderService', ReportBuilderService);

    ReportBuilderService.$inject = ['$http', '$log', '$q', '$rootScope', 'lovefield'];

    function ReportBuilderService($http, $log, $q, $rootScope,StoreService) {
        var imageUrl;
        var imageString;
        var companyName;
        getLogoAndcompanyName();
        toDataURL('app/ReportLogo/logo.png', function (dataUrl) {
            console.log(dataUrl);
            imageUrl = dataUrl;
        });
        var service = {
            BuildPdfContent: BuildPdfContent,
            buildReportHeader: buildReportHeader,
            BuildPDFText: BuildPDFText,
            buildHtmlToPdfReport: buildHtmlToPdfReport,
            displayOrPrintPdf:displayOrPrintPdf,
            getLogoAndcompanyName:getLogoAndcompanyName
        };

        return service;

        function getReportLogo(){

          StoreService.GetGlobalConstants('ImageUrl').then(function(response){
              if (response.length > 0) {
                imageString = response[0].Value;
              }
          });
        }

        function getReporHeader(){
            StoreService.GetGlobalConstants('ReportHeader').then(function(response){
                if (response.length > 0) {
                  companyName = response[0].Value;
                }
            });
        }

        function getLogoAndcompanyName(){
          getReportLogo();
          getReporHeader();
        }


        function BuildPdfContent(reportObject, marginData, lineSpanLength) {
            var pdfContent = {};
            var content = [];
            var parentGroupHead = {};
            var groupHead = [];
            var allParents = reportObject.parentGroupProperty == undefined ? [{ Title: 'N/A' }] : _.uniq(reportObject.reportData.map(function (reportDataEntry) {
                return reportDataEntry[reportObject.parentGroupProperty];
            }));

            for (var i = 0; i < allParents.length; i++) {
                //TODO: push parent title here... : allParents[i] ONLY if reportObject.parentGroupProperty is defined

                var parentSum; // _.sumBy(dataForParent,reportObject.summingProperty);
                var dataForParent = reportObject.parentGroupProperty == undefined ? reportObject.reportData : _.filter(reportObject.reportData, function (o) { return o[reportObject.parentGroupProperty] == allParents[i]; });
                if (reportObject.parentGroupProperty != undefined) {
                    content.push({ width: "*", text: reportObject.parentGroupProperty + ' ----------- ' + (allParents[i] == undefined ? ' N/A' : allParents[i]), margin: [5, 15, 2, 2] });
                    //   parentSum =  _.sumBy(dataForParent,reportObject.summingProperty);
                }
                //  groupHead = reportObject.parentGroupProperty != undefined?[{width:"*", text: allParents[i]==undefined?'N/A':allParents[i],margin: [45, 2, 2, 2] }]:[""];
                //   var groupName = allParents[i]==undefined?'N/A':allParents[i];
                var allChidren = reportObject.childGroupProperty == undefined ? [{ Title: 'N/A' }] : _.uniq(dataForParent.map(function (reportDataEntry) {
                    return reportDataEntry[reportObject.childGroupProperty];
                }));


                //  var childSum = _.sumBy(dataForChild,reportDataEntry.summingProperty);
                for (var j = 0; j < allChidren.length; j++) {


                    var dataForChild = reportObject.childGroupProperty == undefined ? dataForParent : _.filter(dataForParent, function (o) { return o[reportObject.childGroupProperty] == allChidren[j]; });
                    //TODO: Push child title here...: allChidren[j] ONLY if reportObject.childGroupProperty is defined

                    if (reportObject.childGroupProperty != undefined) {
                        content.push({ width: "*", text: reportObject.childGroupProperty + ' ----------- ' + (allChidren[j] == undefined ? ' N/A' : allChidren[j]), margin: [100, 2, 2, 2] });
                        //   parentSum =  _.sumBy(dataForParent,reportObject.summingProperty);
                    }

                    content.push(buildtable({ data: dataForChild, columns: reportObject.columns, width: reportObject.width, parentGroupProperty: reportObject.parentGroupProperty, parentGroupHead: allParents[i] }, marginData));
                    if (reportObject.childGroupProperty != undefined && reportObject.summingProperty != undefined) {
                        content.push({ width: "*", alignment: 'right', text: allChidren[j] + ' Total -----------' + _.floor(_.sumBy(dataForChild, reportObject.summingProperty)) });
                    }
                }

                if (reportObject.parentGroupProperty != undefined && reportObject.summingProperty != undefined) {

                    var groupName = allParents[i] == undefined ? ' N/A' : allParents[i];
                    content.push({ width: "*", alignment: 'right', text: groupName + ' Total -----------: ' + _.floor(_.sumBy(dataForParent, reportObject.summingProperty), 2) });
                }
            }

            //  var groupHead = {width:"*", text: departmentName==undefined?'N/A':departmentName,margin: [45, 2, 2, 2] };
            pdfContent.content = content
            //    pdfContent.content.push(content);

            return pdfContent;
        }

        function toDataURL(src, callback, outputFormat) {

            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.onload = function () {
                var canvas = document.createElement('CANVAS');
                var ctx = canvas.getContext('2d');
                var dataURL;
                canvas.height = 40;
                canvas.width = 40;
                ctx.scale(40 / this.naturalWidth, 40 / this.naturalHeight);

                ctx.drawImage(this, 0, 0);
                dataURL = canvas.toDataURL(outputFormat);
                callback(dataURL);
            };
            img.src = src;
        }

        function buildReportHeader(reportTitle, lineSpanLength,logoMargin,titleMargin) {
            companyName = companyName || 'WorkForce Group';
            imageString = imageString||imageUrl;
            debugger;
            return [
                {
                    table: {
                        widths: ['auto', lineSpanLength-60],
                        body: [
                            [{
                                image: imageString //'/src/app/ReportLogo/logo.png'
                            },
                            {
                                stack: [{
                                    alignment: 'center',
                                    style: 'h1',
                                    text: companyName,
                                    margin:[0, 13, 0, 0]
                                }]
                            }
                            ]
                        ]
                    },margin: logoMargin|| [0, 5, 0, 0]
                }, { canvas: [{ type: 'line', x1: 0, y1: 5, x2: lineSpanLength, y2: 5, lineWidth: 1 }] ,margin:titleMargin|| [0, 5, 0, 0]},
                {
                    alignment: 'center',
                    style: 'header',
                    text: reportTitle,
                    margin:[0, 8, 0, 0]
                },
                { canvas: [{ type: 'line', x1: 0, y1: 5, x2: lineSpanLength, y2: 5, lineWidth: 1 }],margin:titleMargin||[0, 5, 0, 0] }
            ];
        }

        function BuildPDFText(text, style, alignment, margin, bold, canvasFormat) {
            return {
                text: text,
                style: style,
                alignment: alignment,
                margin: margin,
                bold: bold,
                canvas: canvasFormat
            }
        }


        function buildtable(tableData, marginData) {
            if (marginData != undefined) { marginData = marginData } else { marginData = [0, 5, 0, 0] }
            for (var i = 0; i < tableData.data.length; i++) {
                return {
                    columns: [
                        //  { width: '*', text: '' },
                        {
                            width: 'auto',
                            table: {
                                widths: tableData.width,
                                headerRows: 1,

                                body: buildTableBody(tableData.data, tableData.columns)
                            },
                            margin: marginData,
                            fontSize: 10
                        },
                        { width: '*', text: '' }

                    ]
                };
            }

        }

        function buildTableBody(data, columns) {
            var body = [];
            body.push(columns);
            data.forEach(function (row) {
                var dataRow = [];
                columns.forEach(function (column) {
                    if (row[column] == undefined) {
                        row[column] = '';
                    }
                    dataRow.push(row[column].toString());
                });
                body.push(dataRow);
            });
            return body;
        }

    }
})();
