# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) IDE Overview 

### LEARNING OBJECTIVES
*After this lesson, you will be able to:*

- Explain the difference between text and binary files.
- Modify the configuration of Sublime to set the theme, font, tab settings, etc.
- Launch Sublime from the command line.
- Use Find to search the current file, or all of the files.
- Change the layout to 2up, 3up, 4up, etc.
- Install Package Control.
- Use Package Control to install other Sublime plugins.
- Learn Sublime editing tricks such as:
  - Selecting and editing several lines at once.
  - Selecting and editing in "column mode."
  - Moving a selected line up or down.
- Use keyboard shortcuts to save time.


<!-- can you expand on this? -->

### STUDENT PRE-WORK
*Before this lesson, you should:*

- Get familiar with how to create and edit files in Sublime Text.

<a name="opening"></a>

The main purpose of this lesson is to get you comfortable with the
Sublime Text editor, including how to configure it, install plugins, and get
*greedy* about discovering faster, more efficient ways to edit files.


***


## Text Editor Overview

#### What is a Text Editor?
* It provides an interface for viewing and modifying text files.
* Text files are files containing text that's readable by humans.
* Text files are encoded via ASCII or Unicode characters.
* There are different *kinds* of text editors:
    - Terminal/command line: Vim, Emacs, GNU nano
    - Window-based: Sublime, Atom, TextMate, Notepad++

#### Modern Text Editors
* Can open a file or directory.
* Can understand context.
    - Feature context-sensitive help.
    - May highlight errors or bad practices in your code.
    - Adapt to different file formats.
    - Provide syntax highlighting.

* Extensions and plugins are used to add additional features to a text editor.

#### Types of Text Files
* Plaintext
* Markdown
* CSV
* Various programming languages:
    - HTML
    - CSS
    - JavaScript
    - Ruby
    - BASH
    - SQL
* Each programming language has a set of rules, keywords, operators, and syntax.

#### Sublime Text is:
* Multi-platform (OS X, Windows, Linux).
* Popular (widely used for web development).
* Free to try (although you will be nagged to make a purchase).
* Extendable (You can add functionality via plugins).

#### Sublime Versions
* Be sure that you've installed Sublime Text **3**.



## Using Sublime
#### Launching Sublime

To open Sublime, simply click the icon in the Dash or Launchpad.
Or, type `subl` in the terminal.

To open Sublime with a specific file, we can use the command line once again,
this time passing in a file name like so:

```bash
mkdir recipes
subl recipes/veggie_soup.txt
```

#### Project Mode

Real-world software projects often involve _many_ files, which are organized into
folders. It's handy to be able to see all files in our project while
working in our text editor. Sublime makes this easy, as it supports a
project mode. To use this mode, we simply pass a directory instead of a file:

```bash
subl recipes
```
or...

```bash
cd recipes
subl .
```

Notice that the sidebar now has a folders section that shows all files
and folders in the project. Clicking on a folder expands the view to display its
contents.

#### Take a Tour of the Sublime Editor's Window Components

* Menu
* Sidebar
* Open files via tabs
    - Rearrange tabs
    - Change layout of tabs — `Alt-Command-<Number>`
* Edit pane
* Ruler
* Minimap
* Footer
    - Line #, Column #
    - White Space Mode
    - File Type

#### Find (Search)

* You can search through a single file or all open files.
* Your searches can be case sensitive or insensitive.
* You can search using regular expressions (We will talk about these later).

#### Settings and Themes

`cmd + ,` allows you to access Sublime's preferences.

It opens a file as a JSON object (We will more about JSON in the next
few weeks) and basically presents its settings as a series of keys and values.
- You can add keys/values, and/or modify the existing values to fit your personal preferences.

**For now, add the following:**

```json
{
    "draw_white_space": "all",
    "ensure_newline_at_eof_on_save": true,
    "fade_fold_buttons": false,
    "font_face": "Menlo",
    "font_size": 20,
    "highlight_line": true,
    "highlight_modified_tabs": true,
    "indent_to_bracket": true,
    "line_padding_bottom": 1,
    "line_padding_top": 1,
    "open_files_in_new_window": false,
    "rulers":
    [
        78
    ],
    "soda_classic_tabs": true,
    "soda_folder_icons": true,
    "tab_size": 2,
    "translate_tabs_to_spaces": true,
    "trim_trailing_white_space_on_save": true,
    "word_separators": "./\\()\"'-:,.;<>~!@#%^&*|+=[]{}`~?",
    "word_wrap": "false"
}
```

We can change Sublime's color scheme by going to `preferences/color scheme` and selecting one of the available themes. We recommend **Sunburst** or **Dawn**. When you select a scheme, it changes all of the syntax highlighting colors.

## Package Control

Sublime is compatible with many plugins, and we will install new ones almost every week. In the past, you would have had to download the package manually and add it to Sublime's plugins folder. Now, there is a package manager for Sublime, which works a bit like brew; you ask for a package, and Sublime will install it for you.

In short, Sublime is highly customizable. You can play around by editing your user settings and installing plugins. We will do this using *Package Control*.

To install *Package Control*, follow the instructions [here](https://packagecontrol.io/installation#st3).
Note that there are different instructions in ST2 and ST3.

#### Install Some Plugins!

Now we will use *Package Control* to install the following plugins:

1. Advanced New File
	- We can test out the plugin by creating a new file:
		- Create a New File (AdvancedNewFile plugin) — `Alt-Command-N`.
2. Sidebar Enhancements (only available for ST3)
	- Now, when you right-click on any folder or file in the sidebar, you'll see a whole list of options for actions you can perform on these files.
3. Emmet
	- Emmet provides us with a whole range of autocomplete shortcuts for writing HTML.




## Guided Practice

In this code-along, we will create some files via the command line and then edit them in Sublime.




## References


***

<a name="conclusion"></a>
## Conclusion
- Review independent practice deliverable(s).
- Recap topic(s) covered in today's lesson.
- Cover homework and/or upcoming tasks.

***

### ADDITIONAL RESOURCES
- Exercises
	- [Sublime Practice](https://www.shortcutfoo.com/app/dojos/sublime-text-2-mac)
- Videos
	- [Sublime YouTube videos](https://www.youtube.com/playlist?list=PLLnpHn493BHEYF4EX3sAhVG2rTqCvLnsP)
- Readings
	- [Efficiency With Sublime Text](http://thunderboltlabs.com/blog/2013/11/19/efficiency-with-sublime-text-and-ruby/)
	- [Scotch.io Tutorials](https://scotch.io/tag/sublime-text)
	- [Sublime Text Keyboard Shortcuts](http://www.wdtutorials.com/2013/06/23/sublime-text-keyboard-shortcuts-cheat-sheet-win-os-x-and-linux#.VT2F161Viko)

