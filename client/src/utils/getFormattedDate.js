//For  MM DD, YYYY (January 07, 2020) format

const getFormattedDate = date => {
    return new Date(Date.parse(date)).toLocaleDateString("en-US", {
        dateStyle: "long"
    });
};
export default getFormattedDate;