module.exports = function () {
	const userAgentString = window.navigator.userAgent
	const navigator = window.navigator
	const isIpadOS = (navigator.platform && navigator.platform.indexOf('iPad') >= 0) || (userAgentString.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2)
	return RegExp(/iPad|iOS/).test(userAgentString) || isIpadOS
}
