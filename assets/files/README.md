# 简历 PDF 放这里

1. 把简历导出成 PDF，命名为 `CV_Shengyu-Li.pdf`（或任意名字），放进这个文件夹。
2. 打开 `data/content.js`，确认这一行的路径一致：

   ```js
   cvFile: 'assets/files/CV_Shengyu-Li.pdf'
   ```

3. 把 `settings.sections.cvDownload` 改成 `true`，网站顶部就会出现「下载简历」按钮。

建议准备两个文件：中文版和英文版（例如 `CV_李圣宇_CN.pdf`、`CV_ShengyuLi_EN.pdf`），
后续如果需要，可以把它改造成中英文各自下载对应版本。
