/**
 * JavaScript String.replace()
 *
 * Ekdom Beginner-Friendly Explanation:
 *
 * 1️⃣ replace() ki?
 *    - replace() holo JavaScript er ekta string method.
 *    - Eta string er moddhe **prothom bar paoa** ekta word/letter/pattern ke
 *      notun value diye bodlay (replace) kore.
 *    - Khub important:
 *        👉 replace() sudhu **prothom occurrence** (prothom dekha) replace kore.
 *        👉 sob gula replace korte hole replaceAll() ba RegExp "g" flag lagbe.
 *
 * 2️⃣ Syntax:
 *      string.replace(searchValue, replaceValue)
 *
 *    - searchValue → je word/pattern ke khujbo.
 *    - replaceValue → je word/pattern diye bodlay dibo.
 *
 * 3️⃣ Simple Example:
 *      "Hello World".replace("World", "Earth")
 *
 *    Output:
 *      "Hello Earth"
 *
 *    - Ekhane "World" sudhu ekbar chhilo, tai ekbar-i replace holo.
 *
 * 4️⃣ Prothom occurrence replace korar example:
 *
 *      const text = "apple banana apple";
 *      const result = text.replace("apple", "orange");
 *
 *    Output:
 *      "orange banana apple"
 *
 *    - Notice:
 *        - Prothom "apple" replace holo.
 *        - Ditiyo "apple" untouched thaklo.
 *
 * 5️⃣ If you want to replace case-insensitive:
 *
 *      const result = "Hello WORLD".replace(/world/i, "Earth");
 *
 *    - /world/i holo regex.
 *      i → ignore case (WORLD, World, world — sob match hobe)
 *
 * 6️⃣ If you want to replace multiple times (NOT replace(), just info):
 *      - replace() → only first match
 *      - replaceAll() → all matches
 *      - replace() + /pattern/g → all matches (regex global flag)
 *
 * ⭐ Ekdom Simple Summary:
 *    - replace() sudhu **prothom** paoa part ke replace kore.
 *    - Text er shob jaygay replace korte hole replaceAll() or regex "g" use korte hoy.
 *    - replace() pattern/regex er shathe-o kaj kore.
**/
