# 上线到 GitHub Pages · 操作指南

网站是纯静态文件，不需要构建、不需要服务器。仓库已经初始化好（分支 `main`，首次提交已完成），下面两条路选一条即可。

---

## 当前状态：已上线 ✅

| 项目 | 地址 |
| --- | --- |
| 网站 | <https://lishengyulsy.github.io/> |
| 仓库 | <https://github.com/lishengyulsy/lishengyulsy.github.io> |

- 仓库名与用户名一致（`lishengyulsy.github.io`），所以网址是根域名，不需要二级路径。
- Pages 由 GitHub 自动开启并从 `main` 分支根目录发布，已验证构建成功（status: built）。
- 以后修改内容后，等 1 分钟再按 `Ctrl + F5` 强刷即可看到最新版。

---

---

## 方式一：网页上传（不用装任何东西，约 3 分钟）

1. 打开 [github.com](https://github.com) 并登录，右上角 **+ → New repository**。
2. 填写：
   - Repository name：`personal-site`
     （如果想让网址直接是 `https://你的用户名.github.io/`，仓库名要写成 `你的用户名.github.io`）
   - 可见性选 **Public** —— 免费账号的 Pages 只能从公开仓库发布
   - **不要**勾选 "Add a README file"
3. 点 **Create repository**，在新页面点 **uploading an existing file**。
4. 打开本地文件夹 `personal-site`，把这四项一起拖进上传框：

   ```
   index.html
   README.md
   assets  （文件夹）
   data    （文件夹）
   ```

   拖文件夹进去会自动带上里面的所有文件，不用一个个选。
5. 页面下方点 **Commit changes**。
6. 进入仓库的 **Settings → Pages**：
   - Source：**Deploy from a branch**
   - Branch：**main**，目录选 **/ (root)**
   - 点 **Save**
7. 等 1–2 分钟刷新该页面，顶部会出现网址：

   ```
   https://你的用户名.github.io/personal-site/
   ```

> `.gitignore` 和 `.nojekyll` 这两个文件是隐藏文件，网页上传时可以不用管，不影响网站运行。

---

## 方式二：我来做（需要你给一次性授权）

我没法用你的账号登录 GitHub，但如果你愿意给一个**最小权限、短期有效**的令牌，我就能把推送和 Pages 配置一次做完。

> 本次上线就是走的这条路，用的是 7 天有效的细粒度令牌，用完已建议立即撤销。
> 经验备注：细粒度令牌**不能创建新仓库**，所以要先在网页上手动建好空仓库；
> 另外 `用户名.github.io` 这类仓库的 Pages 会被 GitHub 自动开启，不需要额外权限。

**生成令牌的步骤：**

1. GitHub 右上角头像 → **Settings** → 左侧最下方 **Developer settings**
2. **Personal access tokens → Fine-grained tokens → Generate new token**
3. 填写：
   - Token name：`personal-site-deploy`
   - Expiration：**7 days**（用完就失效）
   - Repository access：**Only select repositories** → 选你刚建好的那个仓库
   - Permissions → Repository permissions：
     - **Contents: Read and write**（推送网站文件）
     - **Pages: Read and write**（帮你打开 Pages，找不到这项就留空，第 6 步你在网页点两下即可）
4. 点 **Generate token**，复制那串 `github_pat_...`
5. 发给我，我执行：
   - `git push` 把网站推上去
   - 调用 Pages 接口把 Pages 打开，设置成 `main / (root)`
6. 上线后你回到同一个页面点 **Revoke**，令牌立即失效。

> 建议：推送完就撤销令牌，或者只勾选上面两项权限。我用完不会保存这串令牌，也不会把它写进任何文件。

---

## 上线前建议确认的三件事

1. **仓库是公开的**：GitHub Pages 的网址和仓库源码都会被所有人看到（包括 `data/content.js` 里的文字）。
2. **项目名称的保密性**：简历里的项目名、模拟图如果涉及业主未公开信息，建议先在 `data/content.js` 里改成「某超高层办公综合体」这类写法再上线。
3. **个人信息**：目前页面上公开的是邮箱和 LinkedIn；手机号默认关闭（需要公开时把 `settings.sections.phone` 改成 `true`）。
   提交记录里会留下你的 Git 邮箱，如果不想暴露 Gmail，可以在推送前告诉我换成 GitHub 的 `noreply` 邮箱。

---

## 上线之后怎么更新

- 改文字：只改 `data/content.js` → 把文件重新上传（或在网页上直接 Edit 该文件）→ 提交 → 1 分钟后自动生效。
- 加照片：放进 `assets/img/`，文件名对照 `assets/img/README.md`。
- 建议改动前先复制一份 `content.js` 做备份。

## 国内访问加速

GitHub Pages 在国内速度时好时坏。想要国内打开更快，把同一份文件再传到腾讯云 COS 或阿里云 OSS 的**香港节点**并开启静态网站功能，绑一个自己的域名即可，不需要备案；国内节点最快但需要备案。细节见 [README.md](README.md) 第七节。

## 常见问题

- **打开是 404**：Pages 首次生效需要 1–2 分钟；确认 Settings → Pages 里 Source 是 `main` + `/ (root)`。
- **样式/图片没加载**：GitHub Pages 区分大小写，检查 `content.js` 里的路径大小写是否和实际文件名完全一致。
- **改了没生效**：浏览器缓存，按 `Ctrl + F5` 强制刷新；再等 1 分钟让 Pages 完成部署。
- **想换域名**：Settings → Pages → Custom domain 填自己的域名，并在域名服务商处添加 CNAME 记录指向 `你的用户名.github.io`。
