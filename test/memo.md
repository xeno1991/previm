# MathJaxと組み合わせて数式を扱おう


# 要件
- 移植性
    - TeXやhtmlへの変換がうまく機能するか
    - htmlへはmarked.jsでの変換が比較的うまくいっている
    - TeXに関しては変換後，そのままTeXコンパイルできることが望ましい
- TeX数式を違和感なく扱えるか
    - `\bm`とか使えないのなんとかしたい
- 必要に応じてカスタマイズ
    - highlight.jsとか人によっては使いたいんじゃね？



# test
## Previm with MathJax
- markdownの記号`*_` などはエスケープしないとvimのシンタックスハイライトがうざい
    ```
    \\[
    \exp(x) = \sum\_{n=0}^{\infty} \frac{x^n}{n!}
    \\]
    ```
    \\[
    \exp(x) = \sum\_{n=0}^{\infty} \frac{x^n}{n!}
    \\]

- TeXのシンタックスハイライトを使うにはどうしたらいいのん


## md → html
### marked.js
 okなはず
### pandoc
 `\begin{equation}`とか消えるっぽい

previmでのプレビューしたhtmlをブラウザから保存するのがBEST

## md → TeX
### pandoc
- 次の`\usepackage`を推奨
    ```
    \usepackage{amsmath,amssymb}
    \usepackage{ascmac}
    \usepackage{bm}
    \usepackage[dvipdfm]{graphicx}  %画像
    \usepackage[dvipdfm]{hyperref}  %リンク
    \usepackage{longtable}          %表
    \usepackage{booktabs}           %表
    ```
- 画像はBoundingBox情報を用意しないといけない
    1. `\usepackage[dvipdfm]{graphicx}`
    2. ターミナルにて，`ebb`コマンドを使う
        - `ebb 画像ファイル`
- displaymathはエスケープされてしまう
    ```
    \[ f(x) = x \] → \textbackslash{}{[} f(x)=x \textbackslash{}{]}
    ```
    - 置換でいけそう
        - `s/textbackslash{}{\[}/\[/g`
        - `s/textbackslash{}{\]}/\]/g`
