# Native-speaker audio

Drop MP3 (or OGG/WAV) files here and list them in `manifest.json`.
The audio engine checks this manifest FIRST and only falls back to browser
text-to-speech when a recording is missing, so you can migrate one word at a time
without touching any code.

## manifest.json format

Map the normalised Turkish text to the file path:

```json
{
  "merhaba": "/audio/merhaba.mp3",
  "gunaydin": "/audio/gunaydin.mp3",
  "bir bardak cay lutfen": "/audio/bir-bardak-cay-lutfen.mp3"
}
```

## Key rules

The key is the Turkish text after normalisation:

1. lowercased with the Turkish locale (`I` becomes `i`, not `I`)
2. punctuation removed: `. , ! ? ; : ( ) " ' RIGHT-SINGLE-QUOTE ELLIPSIS`
3. runs of whitespace collapsed to one space, then trimmed

Turkish letters are KEPT in the key, so `"çay"` is the key for çay - not `"cay"`.

Examples:

| Turkish in the app        | manifest key            |
| ------------------------- | ----------------------- |
| `Merhaba`                 | `merhaba`               |
| `Saat kaç?`               | `saat kaç`              |
| `Günaydın!`               | `günaydın`              |
| `Bir bardak çay, lütfen.` | `bir bardak çay lütfen` |

There is no manifest file in this folder yet. That is fine - the engine treats a
missing manifest as "no recordings available" and uses browser TTS for everything.
