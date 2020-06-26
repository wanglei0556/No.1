/**
 * 
 * 1、  清屏： clear
 * 
 * 2、  配置用户信息： ( git config --global user.name "wanglei0556" ) ( git config --global user.email "842210000@qq.com" )
 * 
 * 3、  查看所有的全局配置项： git config --list --global
 * 
 * 4、  查看指定的全局配置项： ( git config user.name ) ( git config user.email )
 * 
 * 5、  获取帮助信息： ( git help config ) ( git config -h )
 * 
 * 6、  在现有目录中初始化仓库： git init
 * 
 * 7、  检查文件的状态： git status
 * 
 * 8、  以精简的方式显示文件状态： ( git status -s ) ( git status --short )
 * 
 * 9、  跟踪新文件： ( git add 文件名 ) ( git add . )
 * 
 * 10、 提交更新：( git commit -m "日志" )
 * 
 * 11、 撤销对文件的修改： git checkout -- 文件名
 * 
 * 12、 取消暂存的文件： ( git reset HEAD 文件名 ) ( git reset HEAD . )
 * 
 * 13、 跳过使用暂存区域： git commit -a -m "日志"
 * 
 * 14、 移除文件： 从仓库和工作区中同时移除： ( git rm -f 文件名 ) 只从仓库中移除但保留工作区： ( git rm --cached 文件名 )
 * 
 * 15、 忽略文件： 见 ( 忽略文件.png )
 * 
 */

/**
 * 16、 查看提交历史：
 * 
 *      # 按时间先后顺序列出所有的提交历史， 最近的提交在最上面
 *      git log
 *      
 *      # 只展示最新的两条提交历史， 数字可以按需进行填写
 *      git log -2
 *      
 *      # 在一行上展示最近两条提交历史的信息
 *      git log -2 --pretty=oneline
 *      
 *      # 在一行上展示最近两条提交历史信息， 并自定义输出的格式
 *      # &h 提交的简写哈希值， %an 作者名字， %ar 作者修订日志， %s 提交说明
 *      git log -2 --pretty=format:"%h | %an | %ar | %s"
 * 
 */

/**
 * 17、 回退到指定的版本：
 * 
 *      # 在一行上展示所有的提交历史
 *      git log --pretty=oneline
 *      
 *      # 使用 git reset --hard 命令， 根据指定的提交 ID 回退到指定版本
 *      git reset --hard <CommitID>
 *      
 *      # 在旧版本中使用 git reflog --pretty=oneline 命令， 查看命令操作的历史
 *      git reflog --pretty=onelone
 *      
 *      # 再次根据最新的提交 ID ， 跳转到最新的版本
 *      git reset --hard <CommitID>
 * 
 */

/**
 * U ： 未跟踪的
 * A ： 已添加索引
 * M ： 已修改
 */