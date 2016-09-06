/**
 * Created by jaWeber on 9/5/16.
 */
var $ = function(id)
{
    return document.getElementById(id);
}

var calculate_cost = function()
{
    // we have to parse - or change - the values to floats. Form values are strings by default.
    var fyl = parseFloat($("fylength").value);
    var fyw = parseFloat($("fywidth").value);
    var rsyl = parseFloat($("rsylength").value);
    var rsyw = parseFloat($("rsywidth").value);
    var lsyl = parseFloat($("lsylength").value);
    var lsyw = parseFloat($("lsywidth").value);
    var byl = parseFloat($("bylength").value);
    var byw = parseFloat($("bywidth").value);

    if(isNaN(fyl) || isNaN(fyw) || isNaN(rsyl) || isNaN(rsyw) ||
        isNaN(lsyl) || isNaN(lsyw) || isNaN(byl) || isNaN(byw))
    {
        alert("Invalid value. Please, correct and click 'Estimate Cost'");
    }
    else
    {
        var total = ((fyl * fyw) + (rsyl * rsyw) + (lsyl * lsyw) + (byl * byw)) * .1 ;//10 cents per square foot
        total = total.toFixed(2);
        $("mowingcost").value= "$ " + total;
    }
}

window.onload = function()
{
    $("estimate").onclick = calculate_cost;

}