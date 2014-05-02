MathJax.Hub.Config({
    tex2jax: {
        inlineMath: [['$','$'], ["\\(","\\)"]] 
    },
TeX: {
    equationNumbers: { autoNumber: "AMS" }, //automatic equation numbering
    Macros:{
        grad:   ['\\mathrm{grad}\\,'],
        diver:  ['\\mathrm{div}\\,'],
        rot:    ['\\mathrm{rot}\\,'],
        bm:     ['{\\boldsymbol{#1}}', 1],
    }
}
});

// numberingを初期化する関数
// Reprocessする前に呼ぶ
function resetEquationNumbers(){
    var AMS = MathJax.Extension["TeX/AMSmath"];
    AMS.startNumber = 0;
    AMS.labels = {};
}

