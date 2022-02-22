let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function ()
{
    offset = offset + 698;
    if (offset > 2004)
    {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function ()
{
    offset = offset - 698;
    if (offset < 0)
    {
        offset = 2004;
    }
    sliderLine.style.left = -offset + 'px';
});