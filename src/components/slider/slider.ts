import 'jquery-ui-touch-punch';
import 'jquery-ui/ui/widgets/slider';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/slider.css';
import 'plugins/jquery-ui-slider-pips/jquery-ui-slider-pips.js';
import 'plugins/jquery-ui-slider-pips/jquery-ui-slider-pips.css';
import * as $ from 'jquery';
   
class Slider
{
    constructor(slider)
    {
        this.$slider = $(slider);
        
        const s = this.$slider.slider({
            min: this.$slider.data('min'),
            max: this.$slider.data('max'),
            value: this.$slider.data('value'),
            step: this.$slider.data('step'),
        });
        
        if (this.$slider.is('[data-fill]'))
        {
            s.slider({
                range: 'min',
            });
        }
        
        if (this.$slider.is('[data-float]'))
        {
            s.slider('float');
        }
        
        if (this.$slider.is('[data-pips]'))
        {
            s.slider("pips", {
                rest: "label"
            });
        }
        
    }
}

export default function render()
{
    const $components = $('.slider-js');

    if ($components.length > 0)
    {
        $components.map((index, node) => new Slider(node));
    }
}
