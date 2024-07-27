const COLORS = [
  { label: "White", value: "#ffffff" },
  { label: "Black", value: "#000000" },
  { label: "Red", value: "#ff0000" },
  { label: "Green", value: "#00ff00" },
  { label: "Blue", value: "#0000ff" },
  { label: "Yellow", value: "#ffff00" },
  { label: "Orange", value: "#ffa500" },
  { label: "Purple", value: "#800080" },
  { label: "Pink", value: "#ffc0cb" },
  { label: "Gray", value: "#808080" },
  { label: "Brown", value: "#a52a2a" },
  { label: "Cyan", value: "#00ffff" },
  { label: "Magenta", value: "#ff00ff" },
  { label: "Lime", value: "#00ff00" },
  { label: "Teal", value: "#008080" },
  { label: "Turquoise", value: "#40e0d0" },
  { label: "Gold", value: "#ffd700" },
  { label: "Silver", value: "#c0c0c0" },
  { label: "Beige", value: "#f5f5dc" },
  { label: "Maroon", value: "#800000" },
  { label: "Navy", value: "#000080" },
  { label: "Aquamarine", value: "#7fffd4" },
  { label: "Azure", value: "#007fff" },
  { label: "Lavender", value: "#e6e6fa" },
  { label: "Indigo", value: "#4b0082" },
  { label: "Olive", value: "#808000" },
  { label: "Violet", value: "#8a2be2" },
  { label: "Salmon", value: "#fa8072" },
  { label: "Sienna", value: "#a0522d" },
  { label: "Sky Blue", value: "#87ceeb" },
  { label: "Tan", value: "#d2b48c" },
  { label: "Thistle", value: "#d8bfd8" },
  { label: "Tomato", value: "#ff6347" },
  { label: "Wheat", value: "#f5deb3" },
  { label: "Coral", value: "#ff7f50" },
  { label: "Crimson", value: "#dc143c" },
  { label: "Dark Blue", value: "#00008b" },
  { label: "Dark Cyan", value: "#008b8b" },
  { label: "Dark Goldenrod", value: "#b8860b" },
  { label: "Dark Gray", value: "#a9a9a9" },
  { label: "Dark Green", value: "#006400" },
  { label: "Dark Khaki", value: "#bdb76b" },
  { label: "Dark Magenta", value: "#8b008b" },
  { label: "Dark Olive Green", value: "#556b2f" },
  { label: "Dark Orange", value: "#ff8c00" },
  { label: "Dark Orchid", value: "#9932cc" },
  { label: "Dark Red", value: "#8b0000" },
  { label: "Dark Salmon", value: "#e9967a" },
  { label: "Dark Sea Green", value: "#8fbc8f" },
  { label: "Dark Slate Blue", value: "#483d8b" },
  { label: "Dark Slate Gray", value: "#2f4f4f" },
  { label: "Dark Turquoise", value: "#00ced1" },
  { label: "Dark Violet", value: "#9400d3" },
  { label: "Deep Pink", value: "#ff1493" },
  { label: "Deep Sky Blue", value: "#00bfff" },
  { label: "Dim Gray", value: "#696969" },
  { label: "Dodger Blue", value: "#1e90ff" },
  { label: "Firebrick", value: "#b22222" },
  { label: "Forest Green", value: "#228b22" },
  { label: "Ghost White", value: "#f8f8ff" },
  { label: "Hot Pink", value: "#ff69b4" },
  { label: "Indian Red", value: "#cd5c5c" },
  { label: "Ivory", value: "#fffff0" },
  { label: "Khaki", value: "#f0e68c" },
  { label: "Lavender Blush", value: "#fff0f5" },
  { label: "Lemon Chiffon", value: "#fffacd" },
  { label: "Light Blue", value: "#add8e6" },
  { label: "Light Coral", value: "#f08080" },
  { label: "Light Cyan", value: "#e0ffff" },
  { label: "Light Goldenrod", value: "#fafad2" },
  { label: "Light Gray", value: "#d3d3d3" },
  { label: "Light Green", value: "#90ee90" },
  { label: "Light Pink", value: "#ffb6c1" },
  { label: "Light Salmon", value: "#ffa07a" },
  { label: "Light Sea Green", value: "#20b2aa" },
  { label: "Light Sky Blue", value: "#87cefa" },
  { label: "Light Slate Gray", value: "#778899" },
  { label: "Light Steel Blue", value: "#b0c4de" },
  { label: "Light Yellow", value: "#ffffe0" },
  { label: "Linen", value: "#faf0e6" },
  { label: "Medium Aquamarine", value: "#66cdaa" },
  { label: "Medium Blue", value: "#0000cd" },
  { label: "Medium Orchid", value: "#ba55d3" },
  { label: "Medium Purple", value: "#9370db" },
  { label: "Medium Sea Green", value: "#3cb371" },
  { label: "Medium Slate Blue", value: "#7b68ee" },
  { label: "Medium Spring Green", value: "#00fa9a" },
  { label: "Medium Turquoise", value: "#48d1cc" },
  { label: "Medium Violet Red", value: "#c71585" },
  { label: "Midnight Blue", value: "#191970" },
  { label: "Mint Cream", value: "#f5fffa" },
  { label: "Misty Rose", value: "#ffe4e1" },
  { label: "Old Lace", value: "#fdf5e6" },
  { label: "Olive Drab", value: "#6b8e23" },
  { label: "Orange Red", value: "#ff4500" },
  { label: "Orchid", value: "#da70d6" },
  { label: "Pale Goldenrod", value: "#eee8aa" },
  { label: "Pale Green", value: "#98fb98" },
  { label: "Pale Turquoise", value: "#afeeee" },
  { label: "Pale Violet Red", value: "#db7093" },
  { label: "Papaya Whip", value: "#ffefd5" },
  { label: "Peach Puff", value: "#ffdab9" },
  { label: "Peru", value: "#cd853f" },
  { label: "Plum", value: "#dda0dd" },
  { label: "Powder Blue", value: "#b0e0e6" },
  { label: "Rosy Brown", value: "#bc8f8f" },
  { label: "Royal Blue", value: "#4169e1" },
  { label: "Saddle Brown", value: "#8b4513" },
  { label: "Sandy Brown", value: "#f4a460" },
  { label: "Sea Green", value: "#2e8b57" },
  { label: "Sea Shell", value: "#fff5ee" },
  { label: "Slate Blue", value: "#6a5acd" },
  { label: "Slate Gray", value: "#708090" },
  { label: "Snow", value: "#fffafa" },
  { label: "Spring Green", value: "#00ff7f" },
  { label: "Steel Blue", value: "#4682b4" },
  { label: "Tan", value: "#d2b48c" },
  { label: "Thistle", value: "#d8bfd8" },
  { label: "Tomato", value: "#ff6347" },
  { label: "Turquoise", value: "#40e0d0" },
  { label: "Violet", value: "#ee82ee" },
  { label: "Wheat", value: "#f5deb3" },
  { label: "White Smoke", value: "#f5f5f5" },
  { label: "Yellow Green", value: "#9acd32" },
  { label: "Light Slate Grey", value: "#778899" },
  { label: "Dim Grey", value: "#696969" },
  { label: "Slate Grey", value: "#708090" },
  { label: "Light Gray", value: "#d3d3d3" },
  { label: "Grey", value: "#808080" },
  { label: "Dark Grey", value: "#a9a9a9" },
  { label: "Light Grey", value: "#d3d3d3" },
  { label: "Mid Grey", value: "#808080" },
  { label: "Pale Grey", value: "#f8f8ff" },
  { label: "Very Light Grey", value: "#e0e0e0" },
  { label: "Lighter Grey", value: "#d3d3d3" },
  { label: "Lightest Grey", value: "#f5f5f5" },
  { label: "Dark Slate Grey", value: "#2f4f4f" },
  { label: "Medium Grey", value: "#808080" },
  { label: "Dark Pale Grey", value: "#a9a9a9" },
  { label: "Dark Grey", value: "#696969" },
  { label: "Pale Grey", value: "#f8f8ff" },
  { label: "Black", value: "#000000" },
  { label: "Midnight Blue", value: "#191970" },
  { label: "Deep Pink", value: "#ff1493" },
  { label: "Cornflower Blue", value: "#6495ed" },
  { label: "Medium Aqua Marine", value: "#66cdaa" },
  { label: "Orange Red", value: "#ff4500" },
  { label: "Lawn Green", value: "#7cfc00" },
  { label: "Medium Purple", value: "#9370db" },
  { label: "Orchid", value: "#da70d6" },
  { label: "Medium Violet Red", value: "#c71585" },
  { label: "Dark Orange", value: "#ff8c00" },
  { label: "Indian Red", value: "#cd5c5c" },
  { label: "Fire Brick", value: "#b22222" },
  { label: "Chocolate", value: "#d2691e" },
  { label: "Golden Rod", value: "#daa520" },
  { label: "Deep Sky Blue", value: "#00bfff" },
  { label: "Dim Grey", value: "#696969" },
  { label: "Crimson", value: "#dc143c" },
  { label: "Corn Silk", value: "#fff8dc" },
  { label: "Burly Wood", value: "#deb887" },
  { label: "Blanched Almond", value: "#ffebcd" },
  { label: "Dark Sea Green", value: "#8fbc8f" },
  { label: "Dark Khaki", value: "#bdb76b" },
  { label: "Dark Golden Rod", value: "#b8860b" },
  { label: "Dark Cyan", value: "#008b8b" },
  { label: "Dark Olive Green", value: "#556b2f" },
  { label: "Dark Salmon", value: "#e9967a" },
  { label: "Dark Slate Blue", value: "#483d8b" },
  { label: "Dark Turquoise", value: "#00ced1" },
  { label: "Deep Pink", value: "#ff1493" },
  { label: "Deep Sky Blue", value: "#00bfff" },
  { label: "Dodger Blue", value: "#1e90ff" },
  { label: "Fire Brick", value: "#b22222" },
  { label: "Floral White", value: "#fffaf0" },
  { label: "Forest Green", value: "#228b22" },
  { label: "Gainsboro", value: "#dcdcdc" },
  { label: "Ghost White", value: "#f8f8ff" },
  { label: "Gold", value: "#ffd700" },
  { label: "Golden Rod", value: "#daa520" },
  { label: "Grey", value: "#808080" },
  { label: "Green Yellow", value: "#adff2f" },
  { label: "Honey Dew", value: "#f0fff0" },
  { label: "Hot Pink", value: "#ff69b4" },
  { label: "Indian Red", value: "#cd5c5c" },
  { label: "Indigo", value: "#4b0082" },
  { label: "Ivory", value: "#fffff0" },
  { label: "Khaki", value: "#f0e68c" },
  { label: "Lavender", value: "#e6e6fa" },
  { label: "Lavender Blush", value: "#fff0f5" },
  { label: "Lawn Green", value: "#7cfc00" },
  { label: "Lemon Chiffon", value: "#fffacd" },
  { label: "Light Blue", value: "#add8e6" },
  { label: "Light Coral", value: "#f08080" },
  { label: "Light Cyan", value: "#e0ffff" },
  { label: "Light Golden Rod", value: "#fafad2" },
  { label: "Light Grey", value: "#d3d3d3" },
  { label: "Light Green", value: "#90ee90" },
  { label: "Light Pink", value: "#ffb6c1" },
  { label: "Light Salmon", value: "#ffa07a" },
  { label: "Light Sea Green", value: "#20b2aa" },
  { label: "Light Sky Blue", value: "#87cefa" },
  { label: "Light Slate Grey", value: "#778899" },
  { label: "Light Steel Blue", value: "#b0c4de" },
  { label: "Light Yellow", value: "#ffffe0" },
  { label: "Lime", value: "#00ff00" },
  { label: "Lime Green", value: "#32cd32" },
  { label: "Linen", value: "#faf0e6" },
  { label: "Medium Aqua Marine", value: "#66cdaa" },
  { label: "Medium Blue", value: "#0000cd" },
  { label: "Medium Orchid", value: "#ba55d3" },
  { label: "Medium Purple", value: "#9370db" },
  { label: "Medium Sea Green", value: "#3cb371" },
  { label: "Medium Slate Blue", value: "#7b68ee" },
  { label: "Medium Spring Green", value: "#00fa9a" },
  { label: "Medium Turquoise", value: "#48d1cc" },
  { label: "Medium Violet Red", value: "#c71585" },
  { label: "Midnight Blue", value: "#191970" },
  { label: "Mint Cream", value: "#f5fffa" },
  { label: "Misty Rose", value: "#ffe4e1" },
  { label: "Moccasin", value: "#ffe4b5" },
  { label: "Navajo White", value: "#ffdead" },
  { label: "Navy", value: "#000080" },
  { label: "Old Lace", value: "#fdf5e6" },
  { label: "Olive", value: "#808000" },
  { label: "Olive Drab", value: "#6b8e23" },
  { label: "Orange", value: "#ffa500" },
  { label: "Orange Red", value: "#ff4500" },
  { label: "Orchid", value: "#da70d6" },
  { label: "Pale Golden Rod", value: "#eee8aa" },
  { label: "Pale Green", value: "#98fb98" },
  { label: "Pale Turquoise", value: "#afeeee" },
  { label: "Pale Violet Red", value: "#db7093" },
  { label: "Papaya Whip", value: "#ffefd5" },
  { label: "Peach Puff", value: "#ffdab9" },
  { label: "Peru", value: "#cd853f" },
  { label: "Pink", value: "#ffc0cb" },
  { label: "Plum", value: "#dda0dd" },
  { label: "Powder Blue", value: "#b0e0e6" },
  { label: "Purple", value: "#800080" },
  { label: "Rebecca Purple", value: "#663399" },
  { label: "Red", value: "#ff0000" },
  { label: "Rosy Brown", value: "#bc8f8f" },
  { label: "Royal Blue", value: "#4169e1" },
  { label: "Saddle Brown", value: "#8b4513" },
  { label: "Salmon", value: "#fa8072" },
  { label: "Sandy Brown", value: "#f4a460" },
  { label: "Sea Green", value: "#2e8b57" },
  { label: "Sea Shell", value: "#fff5ee" },
  { label: "Sienna", value: "#a0522d" },
  { label: "Silver", value: "#c0c0c0" },
  { label: "Sky Blue", value: "#87ceeb" },
  { label: "Slate Blue", value: "#6a5acd" },
  { label: "Slate Grey", value: "#708090" },
  { label: "Snow", value: "#fffafa" },
  { label: "Spring Green", value: "#00ff7f" },
  { label: "Steel Blue", value: "#4682b4" },
  { label: "Tan", value: "#d2b48c" },
  { label: "Teal", value: "#008080" },
  { label: "Thistle", value: "#d8bfd8" },
  { label: "Tomato", value: "#ff6347" },
  { label: "Turquoise", value: "#40e0d0" },
  { label: "Violet", value: "#ee82ee" },
  { label: "Wheat", value: "#f5deb3" },
  { label: "White", value: "#ffffff" },
  { label: "White Smoke", value: "#f5f5f5" },
  { label: "Yellow", value: "#ffff00" },
  { label: "Yellow Green", value: "#9acd32" },
];

export default COLORS;
