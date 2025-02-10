/* eslint-disable @typescript-eslint/no-explicit-any */
const CommonService = {
    truncateText(text: any, limit = 220) {
      if (text.length > limit) {
        return text.substring(0, limit);
      }
      return text;
    }
}

export default CommonService;