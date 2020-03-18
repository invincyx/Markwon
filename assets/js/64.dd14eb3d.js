(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{269:function(t,n,s){"use strict";s.r(n);var a=s(0),o=Object(a.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Starting with "),s("Badge",{attrs:{text:"3.0.0"}}),t._v(" "),s("em",[t._v("visiting")]),t._v(" of parsed markdown\nnodes does not require creating own instance of commonmark-java "),s("code",[t._v("Visitor")]),t._v(",\ninstead a composable/configurable "),s("code",[t._v("MarkwonVisitor")]),t._v(" is used.")],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),s("hr"),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("It holds rendering configuration:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("MarkwonVisitor#configuration")]),t._v(" - getter for current "),s("router-link",{attrs:{to:"/docs/v4/core/configuration.html"}},[t._v("MarkwonConfiguration")])],1),t._v(" "),s("li",[s("code",[t._v("MarkwonVisitor#renderProps")]),t._v(" - getter for current "),s("router-link",{attrs:{to:"/docs/v4/core/render-props.html"}},[t._v("RenderProps")])],1),t._v(" "),t._m(5)]),t._v(" "),s("p",[t._v("It contains also a number of utility functions:")]),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("And some utility functions to control the spans:")]),t._v(" "),t._m(7),t._v(" "),t._m(8),s("h3",{attrs:{id:"blockhandler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blockhandler","aria-hidden":"true"}},[t._v("#")]),t._v(" BlockHandler "),s("Badge",{attrs:{text:"4.3.0"}})],1),t._v(" "),s("p",[t._v("Since "),s("Badge",{attrs:{text:"4.3.0"}}),t._v(" there is class to control insertions of new lines after markdown blocks\n"),s("code",[t._v("BlockHandler")]),t._v(" ("),s("code",[t._v("MarkwonVisitor.BlockHandler")]),t._v(") and its default implementation "),s("code",[t._v("BlockHandlerDef")]),t._v(". For example,\nto disable an empty new line after "),s("code",[t._v("Heading")]),t._v(":")],1),t._v(" "),t._m(9)])},[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"visitor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#visitor","aria-hidden":"true"}},[this._v("#")]),this._v(" Visitor")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"visitor-builder"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#visitor-builder","aria-hidden":"true"}},[this._v("#")]),this._v(" Visitor.Builder")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("There is no need to create own instance of "),n("code",[this._v("MarkwonVisitor.Builder")]),this._v(" as\nit is done by "),n("code",[this._v("Markwon")]),this._v(" itself. One still can configure it as one wishes:")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Markwon markwon "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Markwon"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("builder")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("contex"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("usePlugin")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("AbstractMarkwonPlugin")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("configureVisitor")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" MarkwonVisitor"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder builder"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                builder"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("on")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SoftLineBreak"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("MarkwonVisitor"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NodeVisitor")]),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("SoftLineBreak"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n                    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("visit")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" MarkwonVisitor visitor"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" SoftLineBreak softLineBreak"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        visitor"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("forceNewLine")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("code",[this._v("MarkwonVisitor")]),this._v(" encapsulates most of the functionality of rendering parsed markdown.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("code",[this._v("MarkwonVisitor#builder")]),this._v(" - getter for current "),n("code",[this._v("SpannableBuilder")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ul",[s("li",[s("code",[t._v("visitChildren(Node)")]),t._v(" - will visit all children of supplied Node")]),t._v(" "),s("li",[s("code",[t._v("hasNext(Node)")]),t._v(" - utility function to check if supplied Node has a Node after it (useful for white-space management, so there should be no blank new line after last BlockNode)")]),t._v(" "),s("li",[s("code",[t._v("ensureNewLine")]),t._v(" - will insert a new line at current "),s("code",[t._v("SpannableBuilder")]),t._v(" position only if current (last) character is not a new-line")]),t._v(" "),s("li",[s("code",[t._v("forceNewLine")]),t._v(" - will insert a new line character without any condition checking")]),t._v(" "),s("li",[s("code",[t._v("length")]),t._v(" - helper function to call "),s("code",[t._v("visitor.builder().length()")]),t._v(", returns current length of "),s("code",[t._v("SpannableBuilder")])]),t._v(" "),s("li",[s("code",[t._v("clear")]),t._v(" - will clear state for "),s("code",[t._v("RenderProps")]),t._v(" and "),s("code",[t._v("SpannableBuilder")]),t._v(", this is done by "),s("code",[t._v("Markwon")]),t._v(" automatically after each render call")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ul",[s("li",[s("code",[t._v("setSpans(int start, Object spans)")]),t._v(" - will apply supplied "),s("code",[t._v("spans")]),t._v(" on "),s("code",[t._v("SpannableBuilder")]),t._v(" starting at "),s("code",[t._v("start")]),t._v(" position and ending at "),s("code",[t._v("SpannableBuilder#length")]),t._v(". "),s("code",[t._v("spans")]),t._v(" can be "),s("code",[t._v("null")]),t._v(" (no spans will be applied) or an array of spans (each span of this array will be applied)")]),t._v(" "),s("li",[s("code",[t._v("setSpansForNodeOptional(N node, int start)")]),t._v(" - helper method to set spans for specified "),s("code",[t._v("node")]),t._v(" (internally obtains "),s("code",[t._v("SpanFactory")]),t._v(" for that node and uses it to apply spans)")]),t._v(" "),s("li",[s("code",[t._v("setSpansForNode(N node, int start)")]),t._v(" - almost the same as "),s("code",[t._v("setSpansForNodeOptional")]),t._v(" but instead of silently ignoring call if none "),s("code",[t._v("SpanFactory")]),t._v(" is registered, this method will throw an exception.")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("configureVisitor")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" MarkwonVisitor"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder builder"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    builder"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("on")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Heading"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("MarkwonVisitor"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NodeVisitor")]),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Heading"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("visit")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" MarkwonVisitor visitor"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" Heading heading"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),s("span",{attrs:{class:"token comment"}},[t._v("// or just `visitor.length()`")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" start "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" visitor"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("builder")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("length")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            visitor"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("visitChildren")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("heading"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{attrs:{class:"token comment"}},[t._v("// or just `visitor.setSpansForNodeOptional(heading, start)`")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" SpanFactory factory "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" visitor"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("configuration")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("spansFactory")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("get")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("heading"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getClass")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("factory "),s("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" null"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                visitor"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setSpans")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" factory"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getSpans")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("visitor"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("configuration")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" visitor"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("renderProps")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            \n            "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("visitor"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("hasNext")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("heading"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                visitor"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("ensureNewLine")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                visitor"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("forceNewLine")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Markwon markwon "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Markwon"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("builder")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("usePlugin")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("AbstractMarkwonPlugin")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("configureVisitor")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" MarkwonVisitor"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder builder"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                builder"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("blockHandler")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("BlockHandlerDef")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n                    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("blockEnd")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" MarkwonVisitor visitor"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" Node node"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node "),s("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Heading")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                            "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("visitor"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("hasNext")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                                visitor"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("ensureNewLine")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                                "),s("span",{attrs:{class:"token comment"}},[t._v("// ensure new line but do not force insert one")]),t._v("\n                            "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                            "),s("span",{attrs:{class:"token keyword"}},[t._v("super")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("blockEnd")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("visitor"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" node"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("build")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);o.options.__file="visitor.md";n.default=o.exports}}]);