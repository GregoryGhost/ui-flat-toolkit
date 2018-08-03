import './demo-components-page.pug';
import './demo-components-page.styl';

function importStyles(context){
    context.keys().forEach(key => context(key));
}

function importScripts(context){
    const scripts = {};
    context.keys().forEach(key => {
        scripts[key] = context(key)
    });
    return scripts;
}

importStyles(require.context('../../components/', true, /^\.\/.*\.styl$/));
const scripts = importScripts(
    require.context('../../components/', true, /^\.\/.*\.(tsx|ts|js)$/)
);

$(document).ready(() => {
    for (let key in scripts)
    {
        if (scripts[key].default) {
            scripts[key].default(true);
        }
    }
});

if(module.hot){
    module.hot.accept();
}
