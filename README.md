# html27-tungmdt
# Cài đặt: Visual Studio Code

### Download:

> https://code.visualstudio.com/

### Cài đặt các extensions:

- Auto Close Tag
- Auto Rename Tag
- HTML CSS Support
- HTML Snippets
- Live Server
- Prettier - Code formatter
- Visual Studio IntelliCode
- Bracket Pair Colorizer 2
- Color Highlight
- Dracula Official (theme)

## Session 02 - Practice & Homeworks

- Vẽ Wireframe: https://www.sketch.com/s/bab4fc21-b247-47e7-8b30-6cf82277ebd2?fbclid=IwAR0pLTvJCq8QdGe0fZVkLXX9ElWW-Ct52tuP6tscmlf9E9YG_Fambo9b7vM

## Một số công cụ vẽ Wireframe + Mockup

- https://moqups.com/
- ADOBE XD (https://www.adobe.com/sea/products/xd.html)
- FIGMA (https://www.figma.com/downloads)

## Một số công cụ về màu

- https://colorhunt.co/
- https://coolors.co/
- https://colors.eva.design/
- https://mycolor.space/
- https://material.io/resources/color/#!/?view.left=0&view.right=0
- https://flatuicolors.com/
- https://color.adobe.com/create/color-wheel
- https://colorpalettes.net/
- https://www.materialpalette.com/

## Một số Website về thiết kế:

-https://collectui.com/

## Một số website cung cấp ảnh chất lượng cao miễn phí

- https://pixabay.com/
- https://unsplash.com/

# GIT
## Install
https://git-scm.com/downloads
- Check cài đăt thành công:
+ Window: open cmd -> git -v

MAC: 
- open terminal
- Install brew: https://docs.brew.sh/Installation
- Install git: brew install git
- Check git:  git -v

## Create repository github 
- Login: https://github.com/
- Tạo 1 repository

## Clone repository
- Open VScode
- Open folder code
- Open terminal vscode tại folder code
- Nhập: git clone <HTTPS của repository>

* Lưu ý: Cần phải kiểm soát chặt chẽ cấu trúc folder code.
- Repo bản thân tự tạo: dùng để code (code nhớ FORMAT)
- Repo document: Yêu cầu không thay đổi code. Chỉ dùng git pull để lấy tài liệu.

## Step git push code
- Lần đầu:
+ Khởi tạo git: git init
+ Config email : git config --global user.email '<email>'
+ Config username : git config --global user.name '<name>'
+ Add toàn bộ file change: git add .
+ Tạo commit mô tả: git commit -m 'homework1'
+ git push
- Những lần sau:
+ Add toàn bộ file change: git add .
+ Tạo commit mô tả: git commit -m 'homework1'
+ git push

## Run HTML file:
- MAC: open index.html
- Window: start index.html

* NOTE: 
- Có thể chọn RUN -> START (F5)
- Open folder -> click double vào tên file html.

#
git log —oneline
git reset ...
tạo branch: git checkout -b manhph
git add .
git commit -m 'ádadsdasd'
git commit —amend 

git reset --soft HEAD~
Git stash
Git stash apply
git cherry-pick —CODE

git checkout development
git pull origin development --rebase
git checkout manhph
git rebase development

nếu có conflic thì sửa
git add .
git rebase --continue
:wq
git push
git help -f


git push
git branch --show-current

git remote add origin <remote repository URL>

git branch -D …
