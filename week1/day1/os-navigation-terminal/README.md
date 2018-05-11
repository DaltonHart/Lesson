
# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) OS Navigation Using the Terminal 

### LEARNING OBJECTIVES
*After this lesson, you will be able to:*


- Compare and contrast CLIs with GUIs.
- Explain how use of the command line can increase efficiency.
- Describe the anatomy of a command, including commands, flags, and arguments.
- Explain what a path is and why the "current path" is important in the CLI.
- Explain the difference between absolute and relative paths.
- List common commands to:
	- View the path of the current directory.
	- View the contents of a directory.
	- Navigate to different directories.
	- Manage files and directories.
- List unsafe commands.
- Set up your working directory/environment for WDI.

### STUDENT PRE-WORK
*Before this lesson, you should:*

- Be able to navigate your computer using Finder.
- Be familiar with the command line from Fundamentals.




<a name="opening"></a>
## Opening

**Turn & Talk:** Given your exposure to the command line in the pre-work and Installfest, find a partner and spend **two minutes** discussing and jotting down answers to the following questions:

* How is the CLI different from the GUI?
* What do you like/dislike about using it?
* Compared to a GUI, in what ways might using the CLI be better or worse for developers?



<a name="why-the-cli"></a>
## Why the CLI? 

**Speed:** Developers can execute common tasks more quickly using the CLI. Features such as tab completion,
command history, piping, and more all contribute to this efficiency.

> Try to create a `.txt` file on your computer, first via the GUI, then via the CLI using the `touch` command. Which way is faster?

**Precision:** We can look at the commands we're about to enter and understand exactly what they will do. This allows for...

**Repeatability/Scriptability:** We can easily save commands and reuse them, or even share them with others.

> During Installfest, you ran a set of scripts we shared with you!  

**Tools:** There are many different tools we can use in the CLI to accomplish a vast number of tasks. Most are built in, but we can also download external tools using services like Homebrew (OSX) and `apt-get` (Linux).

> Tree is an example of a handy third-party tool. It's useful for visualizing directory structure. Try downloading it by running this in the CLI: `$ brew install tree`.
>
> Tools built for the command line usually follow something called
the ["Unix philosophy,"](http://catb.org/esr/writings/taoup/html/#id2807216) which dictates that each tool should do one thing and do it
well. Complex tasks can be achieved by chaining tools together.  

**Debugging:** Whenever we get an error in the CLI, it often comes with information we can then use to debug it. As developers, this is preferable to often-unhelpful GUI error messages, such as:

![](http://coding-journal.com/wp-content/uploads/2013/10/Screen-Shot-2013-10-30-at-12.02.14.png)

> All of these benefits aren't necessarily exclusive to the CLI (compared to a traditional GUI), but they tend to be more consistent.





#### DEMO: Hello.txt Using GUI vs. CLI

> Note: There's nothing wrong with combining the powers of both the CLI and a GUI! We generally won't be writing files in the terminal. We'll be using the Atom GUI. Here, we're simply pointing out the efficiencies you gain with knowledge of the CLI.

We might be thinking to ourselves, "These differences are negligible! In this example, it's a difference of *maybe* five seconds. However, in the span of our careers as developers, becoming proficient with the command line is extremely important. It will end up saving us a lot of time.


> **Check:** Compare the benefits of using the CLI as a developer to those of using a GUI. Explain how using the command line can increase efficiency.


<a name="cli-basics"></a>
## The Basics of CLI 

You may already be familiar with some of these concepts, but they're worth reviewing to cement your understanding and fit more practice in.

#### Everything is a Command

First things first, on the command line, everything we enter is a **command**. When we hit `enter`, the command is executed.

#### Commands Have Outputs and Side Effects

Some commands have **outputs**, which are displayed on the screen for us to see.

Examples of commands with outputs might be:

* `pwd`
* `ls`
* `cat <filename>`

Other commands primarily exist to have *side effects*, or, in other words, make some change, usually on our system. An example might be `touch`, which creates a new file.

Note that, oftentimes, a command whose main purpose is a side effect will not provide any output if it succeeds. If there is an error, however, it will provide an output.

In some rare cases, a command may provide both an output and a side effect.

#### Command Syntax (Flags and Arguments)

    $ ls -als *.png

Commands generally consist of three parts: the command, followed by flags (a.k.a., options), and finally, arguments.

The **command** is the first "word," e.g., `ls`, `cd`, or `touch`. It acts like a verb, which generally asks, "What do I want to do?"

Next come the **flags**. Think of these as "options" that tell the command how to do what it's about to do. 
* Sometimes you won't use any options. Other times you'll use just one, or maybe even more!
* Options usually start with one or two dashes. If the option is a letter, then use one dash (e.g., `-a`). If it's a whole word, then use two dashes (e.g., `--all`).

> [Here](http://catb.org/esr/writings/taoup/html/ch10s05.html#id2948149) are some of the single-letter flags you may encounter. This is not an exhaustive list.

Finally, we have **arguments**. These are elements on which you want to perform an action. Usually these are file names, but, alternatively, they could be something like a URL.

#### Common Patterns
The commands entered into the CLI often adhere to one of the following forms:

- `doSomething --how toFiles`
- `doSomething --how sourceFile destinationFile`

Whereas **doSomething** is, in effect, a verb, **how** is an adverb (e.g., should the command be executed "verbosely" or "quietly"?), and **toFiles** is the object or objects (typically one or more files) on which the command should act.

> Not all commands follow this pattern, but many do.

Let's take a look a command we executed for Installfest.

```
$ brew install git
```

> When we type in this command and hit `enter`, we're saying, "Computer, we're about to do something with Homebrew. This thing will install something. What we want to install is Git."

#### Independent Practice (Commands, Flags, and Arguments) 
**Q:** Spend two minutes identifying the commands, flags, and arguments for each of the following commands:

  1. `$ touch index.html`
  2. `$ ls -al`
  3. `$ cp index.html index2.html`
  4. `$ brew install git`

> **Lesson Objective:** Describe the anatomy of a command, including commands, flags, and arguments.

> Remember, not all commands have flags and/or arguments.

> **Check:** Spend 2-3 minutes reviewing answers with the class.



<a name="paths"></a>
## Paths 
#### What is a "path"?

A path is a description that tells us (or a computer) the location of a file or directory on our device.

Our terminal (shell) is always working out of one path at a time. Commands will take action in that current path (directory) unless we tell them otherwise.

#### Relative vs. Absolute Paths

All paths point to a single file or directory, but we can write paths as either **relative** or **absolute**.

##### Absolute Paths

An absolute path will always tell us exactly where a file or directory is located. A real-world example would be a mailing address:

```
Room 6
GA
5th Floor, Standard Oil Building
225 Bush Street
San Francsico, CA 94110
USA
Earth
Solar System
Orion Arm
Milky Way
The Local Group
Virgo Supercluster
Laniakea Supercluster

```

Absolute paths start with a `/` and go from the top down (least specific to most specific).

```bash
/Milky_Way/Solar_System/Earth/USA/CA/San_Francisco
```

Another more realistic example would be:

```bash
/Users/joehacker/wdi/lessons/cli-intro
```

The first slash essentially means "Start at the root of the computer's file system."

Some absolute paths instead start with a `~`. This is a shortcut to the absolute path of our home directory. So, the absolute path we saw above could also be written as:

```bash
~/wdi/lessons/cli-intro
```

> On Macs, `~` corresponds to your user directory — `/users/your-mac-username`.


#### Relative Paths

Relative paths start from the current working directory and are written with anything but `/` or `~`.

So, if we were in our home directory, the path to this lesson's directory could be written in the following ways:

```bash
wdi/lessons/cli-intro                                   # relative
~/wdi/lessons/cli-intro                                 # absolute
/Users/adrianmaseda/wdi/lessons/cli-intro               # absolute
```

If we were in a different working directory, then this relative path would point to an entirely different folder/file.

Periods take on a special meaning when they are used in relative paths:
* `.`: One dot means "relative to the current directory."
* `..`: Two dots means "Go up to the parent directory."

So, if we're in `~/wdi/lessons`, then the relative path `../projects` means "Go up one level to the WDI folder, then down to the `projects` directory."

We can use more than one `..` to move up multiple levels. For example:

This time, if we're in `~/wdi/lessons/cli-intro`, entering `cd ../../projects` would move us up two levels to `wdi`, then down one level to `projects`.

**Q:** Spend two minutes explaining, in plain English, the actions the following commands perform:
  1. `$ cd ./lessons`
  2. `$ ls ..`
  3. `$ mv ../index.html .`


> **Check:** Explain what a path is and why "current path" is important in the CLI.

> **Check:** Explain the difference between absolute and relative paths.

<a name="common-commands"></a>
## Common Commands 

#### Getting Help 

There are three general ways to get help with a command.

* Add `--help` or `-h` to the end of the command (e.g., `brew --help`).
* Use the manual — or `man` — tool (e.g., `man brew`).
* Google!

The first two options will display text using a program called `less`. Use the arrow keys to navigate. Type `q` to quit.


#### Basic Interface Commands Overview 
1. `ls [*DIRECTORY*]`
	- List the contents of a directory.
	- Common examples:
		- `ls -l`
		- `ls -a`
		- `ls -la`
1. `pwd`
	- Show the path to the current directory.
1. `mkdir *DIRECTORY*`
	- Make a directory.
1. `cd [*DIRECTORY*]`
	- Change to a different directory.
1. `touch *FILE*`
	- Create an empty file.
1. `mv *SOURCE* *DESTINATION*`
	- Move a file/directory somewhere else.
	- Rename a file/directory.
1. `cp *SOURCE* *DESTINATION*`
	- Copy a file to a destination.
1. `rmdir *DIRECTORY*`
	- Remove an empty directory.
1. `open [-a *PATHTOAPPLICATION*] file`
	- Open a file.


#### Unsafe Commands 

### `sudo`

`sudo` — or "super user do" — executes the command that follows as the super user (i.e., "root" or "admin"). This means that your computer will not prevent you from running the command and may not even confirm if it is what you actually want to do. This is of particular concern when a command may have a destructive effect.

> Generally, you shouldn't need to run commands with `sudo` in this course. If you're not sure, ask an instructor.

### `rm`

`rm` — or "remove" — deletes files with no confirmation. There is no `trash` from which to recover removed files. So, use `rm` with caution.

You should be especially careful with `rm -rf`.

> **Check:** Based on your knowledge of flags, what does `rm -rf` do?

> **Lesson Objective:** List unsafe commands.

#### Independent Practice: Star Wars 
> **Lesson Objective:**
- List common commands to:
	- View the path of the current directory.
	- View the contents of a directory.
	- Navigate to different directories.
	- Manage files and directories.

[Star Wars Lab Instructions](labs/star_wars/README.md)

> **Check:** Ensure that students have come up with the correct answers for the exercise.

<a name="wdi-environment"></a>
## WDI Environment

#### Directory Structure

Here's the suggested structure for your WDI folder. Please create the following folders if they don't already exist.

  * `~/wdi`
    * `sandbox`
    * `exercises`
    * `lessons`
    * `projects`



## Ultimate Time Savers (If Time Allows)

The next three points are reasons to not hold down the arrow or delete keys.

### `ctrl-c`

Cancels whatever you were typing before.

### `ctrl-e`

Moves the cursor to the **e**nd of the line.

### `ctrl-a`

Moves the cursor to the beginning of the line.

> `a`, as in the beginning of the English alphabet.

### Up and Down Arrows

Cycle through previous commands.

### Tab Completion

When typing a command that has a file as an argument, such as `cd`,
type only the first few letters and hit the `tab` key.

### Clear the Screen

- `ctrl-l`
- `command-k`
- `clear`

## You Do: Speed Rounds

Copy and paste each of the following commands into the terminal without
pressing `enter`.

### 1. Cancel the really long line of text.

```
$ kjahlkjhsadlkjfhlaksjdhf asdjkfhlsadjhflkjashdf lasjkhdfjhasd sdjhfjhsgajhgf
```

### 2. Fix the typo at the beginning of the command.

```
$ cdd ~/Documents && pwd && ls && ccd -
```

### 3. Fix the typo at the end of the command.

```
Same as the previous command
```



## Own Your Terminal (If Time Allows)

#### Styling the Default Terminal Application
1. [Color your prompt](http://www.cyberciti.biz/faq/bash-shell-change-the-color-of-my-shell-prompt-under-linux-or-unix/).
  - It will be much easier to read.
2. [Choose a theme](http://apple.stackexchange.com/a/92769).
  - Pick something you'd like to look at.



## Bash Profile Aliases (If Time Allows)

You may have noticed during Installfest that your instructors messed with this file: `~/.bash_profile`.

<details>
  <summary>**Q:** Based on its path, where is this file located?</summary>
  In the home directory (i.e., Users/your-name-here).
</details>

Essentially, we changed the `~/.bash_profile` to improve your prompt!

There will be commands you find yourself using frequently, and it might become a pain to continually type these commands out in full. Wouldn't it be nice if we could shorten some of these commands? Enter aliasing. 

Aliasing is really quite simple!

Let's open our `~/.bash_profile` in Atom and type in the following commands:

```
alias greeting="echo 'hello world'"
alias gs='git status'
```

> At this point you may be wondering what exactly "bash" is. Bash is a language we can use to interact with our computer via the shell (e.g., terminal, or some other text-based interface).

#### You Do: Make An Alias

Take the next **five minutes** to create and test your own alias. If possible, alias a command you think you'll use frequently!



<a name="conclusion"></a>
## Conclusion 
- Review independent practice deliverables.
- Recap topics covered in today's lesson and learning objectives.
- Cover homework assigments and/or upcoming tasks.










### Checks for Understanding

* Why would a developer prefer the command line over a GUI?
* Where can we find help for shell commands?
* Describe four bash commands for managing folders and files.
* Describe two unsafe commands.
* You are currently working in the `code` folder of the following file tree. How would you get to the folder that contains "beach.png" using the command line?

```
home
├── documents
│   └── code
├── photos
│   ├── headshot.jpg
│   └── summer_vacation_2014
│       └── beach.png
└── videos
```

* **BONUS:** Write a command to list only the files that begin with your first name. Label the parts of the command.

### Hungry for More?

* `grep`
* `cat`
* `less`
* `find`
* `cal`
* `vim` and `vimtutor`

### Feeling Adventurous?

Bash isn't your only option: Check out zsh (http://code.joejag.com/2014/why-zsh.html) or fish (http://fishshell.com/).



### Glossary

*  **Prompt**: A sequence of (one or more) characters used in a command line interface to indicate readiness to accept commands. It is meant to literally "prompt" the user to take action. A prompt usually ends with one of these characters: `$`, `%`, `#`, `:`, `>`. It also often includes other information, such as the path of the current working directory.

*  **Arguments (Parameters)**: Items of information provided to a program or command when it boots up. A program can contain many command line arguments that identify the sources or destinations of information or alter the operation of the program.

*  **Flags (Options)**: Items that modify the operation of a command; their effect is determined by the command's program. Options follow the command name on the command line and are separated by spaces.

*  **Path**: The description that tells us (or a computer) where a file or folder is located on our device.



### ADDITIONAL RESOURCES

- Exercises
	- [Kitchen Organizer](labs/kitchen/README.md)
  - [CLI Gardening](https://github.com/ga-dc/cli_gardening)
	- [Command Line Fu — Challenge](https://github.com/ga-wdi-exercises/command_line_fu)
- Readings
	- [Unix Intro Course](http://www.doc.ic.ac.uk/~wjk/UnixIntro/)
	- [Bash Beginner's Guide](http://www.tldp.org/LDP/Bash-Beginners-Guide/html/)
- Cheat Sheets:
	- https://github.com/0nn0/terminal-mac-cheatsheet/wiki/Terminal-Cheatsheet-for-Mac-%28-basics-%29
	- http://i.imgur.com/1c9y0.png

