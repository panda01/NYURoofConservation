(function()
{
    var Tools = [
    {img: 'basketball_court.jpg', name:'Basket ball Court', width: 200},
    {img: 'grass.jpg', name:'Grass'},
    {img: 'flower_garden.jpg', name:'Grass'},
    {img: 'greenhouse.jpg', name:'Grass'},
    {img: 'solar-panel.jpg', name:'Grass'},
    {img: 'vegetable_garden.jpg', name:'Grass'},
    {img: 'fish_pond.jpg', name:'Fish Pond'}];
    function initGlobalVars()
    {
    }
    function initDOM()
    {
        //jQuery Objects
        var $canvas = $('#canvas'),
            $toolBox = $('#tool-box');
        //Variables
        var canvasWidth = $canvas.width(),
            canvasHeight = $canvas.height(),
            rows = 30,
            cubeWidth = canvasHeight/rows,
            cols = Math.ceil(canvasWidth/cubeWidth);
        //Functions
        var drawTool = function(obj)    { return '<div class="draggable ui-draggable"><img width="100px" src="imgs/' + obj.img + '" /></div>'; };

        //draw all the tools.
        for( var i = Tools.length; --i >= 0;)
            $toolBox.append( drawTool(Tools[i]) );
            

        $('.draggable').draggable({revert:true, 
            helper:'clone', 
            scope:'architect',
            snap: '.draggable',
            snapMode: 'outer'});
        $('.droppable').droppable({
            drop:function(event, ui)
            {
                console.log( ui );
                $(this).append($(ui.helper).clone());
            },
            scope:'architect',
            tolerance: 'fit'
        });
    }
    function initEvents()
    {
    }
    $(document).ready(function()
    {
        initGlobalVars();
        initDOM();
        initEvents();
    });
}())
