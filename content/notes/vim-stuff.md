# VIM stuff


* [vim shortcuts](https://vim.rtorr.com/)
* [vimtutor](https://superuser.com/questions/246487/how-to-use-vimtutor)
* [onivim](https://github.com/onivim/oni2) built on [revery](https://github.com/revery-ui/revery)
* [vim cheatsheet](https://devhints.io/vim)
* `vimtutor` - built in tutor

#### Moving Around

* <kbd>h</kbd>, <kbd>j</kbd>, <kbd>k</kbd>, <kbd>l</kbd> - left, down, up, right
* <kbd>w</kbd> - move to START of next word
* <kbd>e</kbd> - move to the END of the next word.
* <kbd>b</kbd> - nove back a word 
* <kbd>gg</kbd> - top of file
* <kbd>G</kbd> - bottom of file
* <kbd>23G</kbd> - jump to line
* <kbd>$</kbd> - jump to end of line
* <kbd>0</kbd> - jump to start of line

#### Deleting, editing, etc.
* <kbd>d</kbd> - delete, a motion... e.g., <kbd>dw</kbd> means "delete word" 
* <kbd>x</kbd> - delete where cursor is
* <kbd>y</kbd> - "yank" operator, aka copy
* <kbd>p</kbd> - paste after cursor
* <kbd>P</kbd> - paste before cursor
* <kbd>c</kbd> - "change" operator, <kbd>cw</kbd> = change word
* <kbd>u</kbd> - undo a sinlge change
* <kbd>r<kbd> - redo a single change
* <kbd>Ctrl + r</kbd> - redo a single undo


Confusingly, doubling a motion means to do it for a line?
* <kbd>yy</kbd> - yank a line
* <kbd>dd</kbd> - delete a line

#### Searching
* <kbd>/<kbd> -  search motion, aka forward motion. after running a search, you can use <kbd>n</kbd> to jump through search results. <kbd>N</kbd> moves backwards.k
* <kbd>?<kbd> - same as <kbd>/</kbd>, but searches backwards.

#### Select
* <kbd>v</kbd> - enter "visual" mode for selecting text.
* <kbd>V</kbd> - enter "visual line" mode for selecting whole lines

#### Text Objects
* "Text Objects" are blocks of text with their own starting or ending characters, like `{` or `()`.
* Text objects can be manipulated with the other operators, like <kbd>y</kbd>, <kbd>c</kbd>, and <kbd>d<kbd>, and <kbd>v</kbd>
* In general, defining a text object with <kbd>i</kbd> will be the so-called "inner" object, while defining a text object with <kbd>a</kbd> will be "an" object

Examples:
* <kbd>di(</kbd> will delete everything in parentheses
* <kbd>da(</kbd> will delete everything in the parentheses, including the parentheses
* <kbd>ci(</kbd> will change everything in the parentheses 
* <kbd>yi(</kbd> will yank everything in the parentheses
* <kbd>dit</kbd> will delete everything within a current html tag (<kbd>t</kbd> here automatically knowing it's HTML!)

