function LoadCustomPageasSidePane() {
// Side Dialog
var pageInput = {
    pageType: "custom",
    name: "crb45_itgrid1_92d84",
};
var navigationOptions = {
    target: 2, 
    position: 2,
    width: {value: 500, unit: "px"},
    title: "Side Page - IT HelpDesk"
};
Xrm.Navigation.navigateTo(pageInput, navigationOptions)
    .then(
        function () {
            // Called when the dialog closes
        }
    ).catch(
        function (error) {
            // Handle error
        }
    );
}

function LoadLowcoderaComponents() {
    // Side Dialog
    var pageInput = {
        pageType: "custom",
        name: "crb45_customcharts_d398b",
    };
    var navigationOptions = {
        target: 2, 
        position: 2,
        width: {value: 500, unit: "px"},
        title: "IT Analytics"
    };
    Xrm.Navigation.navigateTo(pageInput, navigationOptions)
        .then(
            function () {
                // Called when the dialog closes
            }
        ).catch(
            function (error) {
                // Handle error
            }
        );
    }

    function LoadCustomPageasCenterDialog() {
        var pageInput = {
            pageType: "custom",
            name: "crb45_itgrid1_92d84",
        };
        var navigationOptions = {
            target: 2,
            position: 1,
            width: { value: 50, unit: "%" },
            title: "IT Help Desk - Pop Up"
        };
        Xrm.Navigation.navigateTo(pageInput, navigationOptions)
            .then(
                function () {
                    // Called when the dialog closes
                }
            ).catch(
                function (error) {
                    // Handle error
                }
            );
    }
    
    function LoadCustomPageasFullPage() {
        var pageInput = {
            pageType: "custom",
            name: "crb45_itgrid1_92d84",
        };
        var navigationOptions = {
            target: 1
        };
        Xrm.Navigation.navigateTo(pageInput, navigationOptions)
            .then(
                function () {
                    // Called when page opens
                }
            ).catch(
                function (error) {
                    // Handle error
                }
            );
    }

    function OpenRecord(str) {
        // Side Dialog
        var pageInput = {
            pageType: "custom",
            name: "crb45_itgrid1_92d84",
            entityName: "crb45_tickets",
            recordId: str,
        };
        var navigationOptions = {
            target: 1
          
        };
        Xrm.Navigation.navigateTo(pageInput, navigationOptions)
            .then(
                function () {
                    // Called when the dialog closes
                }
            ).catch(
                function (error) {
                    // Handle error
                }
            );
    }