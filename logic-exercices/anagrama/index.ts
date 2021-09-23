function anagrama(a: string, b: string) {
	return a.split("").sort().join("") === b.split("").sort().join("")
}