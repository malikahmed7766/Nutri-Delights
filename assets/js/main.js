$(document).ready(function (e) {
    console.log("Nutri Delights || Premium Dry Fruits Delievered");

    const TooltipElement = document.querySelectorAll(`[data-bs-toggle="tooltip"]`);
    TooltipElement.forEach((TooltipElement) => {
        new bootstrap.Tooltip(TooltipElement);
    });


    $(".theme-change").click(function () {
        let theme = "light";

        if (theme === "light") {
            theme = "dark";
            $(".theme-change > svg").removeClass("fa-moon");
            $(".theme-change > svg").addClass("fa-sun");
            $("html").attr("data-bs-theme", theme);
            // $(".theme-change").attr("data-bs-original-title" , "Enable Light Mode");
        }

        else{
            theme = "light";
            $(".theme-change > svg").addClass("fa-moon");
            $(".theme-change > svg").removeClass("fa-sun");
            $("html").attr("data-bs-theme", theme);
            // $(".theme-change").attr("data-bs-original-title" , "Enable Dark Mode");
        }
    });

    $(window).scroll( ()=> { 
        if (scrollY > 400) {
            $(".header-bottom").addClass("header-scroll");
        }
        else{
            $(".header-bottom").removeClass("header-scroll");
        }
    });

    $(".dropdown-toggle").click( (e)=> { 
        e.preventDefault();
        $(`.ctg-dropdown-menu`).toggleClass("toggle-menu");
    });

});