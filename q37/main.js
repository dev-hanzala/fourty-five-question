function makeShirt(size, design) {
    if (size === void 0) { size = "Medium"; }
    if (design === void 0) { design = "Live, Laugh, Love"; }
    console.log("A ".concat(size, " size shirt with text ").concat(design, " on it"));
}
;
console.log(makeShirt());
