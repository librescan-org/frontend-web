<script setup lang="ts">
// @ts-ignore
import Prism from 'prismjs'
import 'prismjs/components/prism-solidity.js'
import 'prismjs/components/prism-javascript.js'
import 'prismjs/components/prism-typescript.js'
import 'prismjs/components/prism-python.js'
import 'prismjs/components/prism-java.js'
import 'prismjs/components/prism-c.js'
import 'prismjs/components/prism-cpp.js'
import 'prismjs/components/prism-csharp.js'
import 'prismjs/components/prism-go.js'
import 'prismjs/components/prism-rust.js'
import 'prismjs/themes/prism.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

interface CodeBlockProps {
  code: any
  language: string
}
const props = defineProps<CodeBlockProps>()

onMounted(() => {
  Prism.highlightAll()
})
</script>

<template>
  <div class="code-block-component">
    <pre class="line-numbers" :class="'language-' + props.language"><code>{{ code }}</code></pre>
  </div>
</template>
