import './demo-components-page.pug';
import './demo-components-page.styl';

function importStyles(context){
    context.keys().forEach(key => context(key));
}

importStyles(require.context('../../components/', true, /^\.\/.*\.styl$/));

if(module.hot){
    module.hot.accept();
}
