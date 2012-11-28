(function()
{
    function initGlobalVars()
    {
    }
    function initDOM()
    {
        var $canvas = $('#canvas'),
            canvasWidth = $canvas.width(),
            canvasHeight = $canvas.height(),
            rows = 30,
            cubeWidth = canvasHeight/rows,
            cols = Math.ceil(cubeWidth/canvasWidth);

        $('.draggable').draggable({revert:true, 
            helper:'clone', 
            scope:'architect'});
        $('.droppable').droppable({
            drop:function(event, ui)
            {
                console.log( ui );
                $(this).append($(ui.draggable).clone());
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
