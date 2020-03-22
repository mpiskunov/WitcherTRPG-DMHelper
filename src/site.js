const SelectedNavBar = (sectionName) =>
{
    // Nav Item's class string
    var navItem = "sidenav---sidenav-navitem---uwIJ-";
    var subNavItems = "sidenav---sidenav-subnavitem---1cD47 ";
    // Nav Item's selected. We will apply this to whatever section that is being viewed.
    var selectedItem = "sidenav---selected---1EK3y";

    // Nav Item's highlighted. We will apply this to whatever section that is being viewed.
    var highlightedItem = "sidenav---highlighted---oUx9u"

    // Returns all Nav Items on the SideBar
    var navItems = document.getElementsByClassName(navItem);
    var subNavItems = document.getElementsByClassName(subNavItems);
    debugger;
    if(navItems.length == 0) return;
    // For each Nav Item, remove the highlighted/selected classes from them.
    for(var i = 0; i < navItems.length; i++)
    {
        navItems[i].classList.remove(selectedItem);
        navItems[i].classList.remove(highlightedItem);
    }
    for(var i = 0; i < subNavItems.length; i++)
    {
        subNavItems[i].classList.remove(selectedItem);
        subNavItems[i].classList.remove(highlightedItem);
    }


    for(var i = 0; i < sectionName.length; i++)
    {
        // Apply the hightlighted/selected classNames to the current item being viewed.
        document.getElementById(sectionName[i]).parentElement.classList.add(selectedItem);
        document.getElementById(sectionName[i]).parentElement.classList.add(highlightedItem);
    }
}

module.exports = SelectedNavBar;