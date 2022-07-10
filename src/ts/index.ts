const createEl = (tag: keyof HTMLElementTagNameMap, className: string, content?: string) => {
    const el = document.createElement(tag)
    el.className = className
    el.innerHTML = content || ""
    return el
}

function typewrite(element: HTMLElement, text: string, time: number): Promise<void> {
    return new Promise((res) => {
        element.innerHTML = ""
        let index = 0
        const write = () => {
            if (index < text.length) {
                index++
                element.innerHTML += text[index - 1]
                setTimeout(write, time)
            } else {
                res()
            }
        }
        setTimeout(write, time)
    })
}

function writeLine(
    element: HTMLElement,
    text: string,
    time: number
): Promise<{ user: HTMLElement; text: HTMLElement; cursor: HTMLElement }> {
    return new Promise((res) => {
        const line = createEl("div", "terminal-line")
        const userEl = createEl("div", "terminal-user", "techterm@127.0.0.1:~$ ")
        line.appendChild(userEl)
        const textEl = createEl("div", "terminal-text", "")
        line.appendChild(textEl)
        const cursorEl = createEl("div", "terminal-cursor", "&nbsp;")
        line.appendChild(cursorEl)
        element.appendChild(line)
        typewrite(textEl, text, time).then(() =>
            res({ user: userEl, text: textEl, cursor: cursorEl })
        )
    })
}

const root = document.getElementById("terminal")

if (root) {
    setTimeout(() => {
        writeLine(root, "Oh noes!", 50).then((line1) =>
            setTimeout(() => {
                line1.cursor.remove()
                writeLine(
                    root,
                    "It appears that this page never existed, maybe you wanted to go home?",
                    50
                ).then((line2) => {
                    setTimeout(() => {
                        line2.cursor.remove()
                        writeLine(root, "sudo re", 100).then((line3) => {
                            writeLine(root, "", 0).then((suggestions) => {
                                suggestions.user.style.visibility = "hidden"
                                suggestions.cursor.remove()
                                const returnHomeSuggestion = createEl(
                                    "button",
                                    "terminal-suggestion",
                                    "return-home"
                                )
                                returnHomeSuggestion.onclick = () => {
                                    line3.text.innerHTML = "sudo return-home"
                                    window.location.href =
                                        "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                }

                                const reloadSuggestion = createEl(
                                    "button",
                                    "terminal-suggestion",
                                    "reload"
                                )
                                reloadSuggestion.onclick = () => {
                                    line3.text.innerHTML = "sudo reload"
                                    window.location.reload()
                                }

                                suggestions.text.appendChild(returnHomeSuggestion)
                                suggestions.text.appendChild(reloadSuggestion)

                                document.addEventListener("keypress", (event) => {
                                    if (event.key === "Enter") {
                                        if (line3.text.innerHTML === "sudo reload") {
                                            window.location.reload()
                                        } else if (line3.text.innerHTML === "sudo return-home") {
                                            window.location.href =
                                                "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                        } else {
                                            line3.text.innerHTML = "sudo re"
                                            writeLine(
                                                root,
                                                "Unknown command! Please look at the suggestions...",
                                                50
                                            ).then((response) => {
                                                setTimeout(() => {
                                                    response.text.parentElement?.remove()
                                                }, 2000)
                                            })
                                        }
                                    } else {
                                        line3.text.innerHTML += event.key
                                    }
                                })
                                document.addEventListener("keydown", (event) => {
                                    if (
                                        (event.key === "Backspace" || event.key === "Delete") &&
                                        line3.text.innerHTML.length > 5
                                    ) {
                                        line3.text.innerHTML = line3.text.innerHTML.substring(
                                            0,
                                            line3.text.innerHTML.length - 1
                                        )
                                    }
                                })
                                const handleChange = () => {
                                    const cmd = line3.text.innerHTML.substring(5)
                                    reloadSuggestion.style.display =
                                        reloadSuggestion.innerHTML.startsWith(cmd)
                                            ? "inline"
                                            : "none"
                                    returnHomeSuggestion.style.display =
                                        returnHomeSuggestion.innerHTML.startsWith(cmd)
                                            ? "inline"
                                            : "none"
                                }
                                setInterval(handleChange.bind(this), 50)
                            })
                        })
                    }, 500)
                })
            }, 500)
        )
    }, 500)
}
