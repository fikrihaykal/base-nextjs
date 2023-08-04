const oneYearAgo = new Date();
const oneSemesterAgo = new Date();
const oneMonthAgo = new Date();
const oneWeekAgo = new Date();
const today = new Date();
oneYearAgo.setHours(0, 0, 0, 0)
oneSemesterAgo.setHours(0, 0, 0, 0)
oneMonthAgo.setHours(0, 0, 0, 0)
oneWeekAgo.setHours(0, 0, 0, 0)
today.setHours(0, 0, 0, 0)
oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)
oneSemesterAgo.setMonth(oneSemesterAgo.getMonth() - 6)
oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

export { oneYearAgo, oneSemesterAgo, oneMonthAgo, oneWeekAgo, today }