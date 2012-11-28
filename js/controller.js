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
            cols = Math.ceil(canvasWidth/cubeWidth);

        $('.draggable').draggable({revert:true, 
            helper:'clone', 
            scope:'architect',
            grid:[cols,rows]});
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
