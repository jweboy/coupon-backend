import moment, { Moment, isMoment } from 'moment';

/**
 * @name 给当前的moment时间对象动态设置时分秒毫秒，多用于接口请求入参格式化
 * @param {Moment} time 时间对象
 * @param {('start' | 'end')} type 格式化类型，目前只有这两种类型，基本符合业务使用场景
 * @param {boolean} [hasMillisecond] 是否需要格式化毫秒级别
 * @returns {string} 格式化后的时间戳字符串
 */
export function getTimestamp(time: Moment, type: 'start' | 'end', hasMillisecond?: boolean) {
  const current = new Date();
  const today = moment();

  if (time === null) {
    return '';
  }

  if (type === 'start' && isMoment(time)) {
    time.set('hour', 0);
    time.set('minute', 0);
    time.set('second', 0);
    if (hasMillisecond) {
      time.set('millisecond', 0);
    }
  }

  if (type === 'end' && isMoment(time)) {
    // 今日
    if (time.format('YYYY.MM.DD') === today.format('YYYY.MM.DD')) {
      time.set('hour', current.getHours());
      time.set('minute', current.getMinutes());
      time.set('second', current.getSeconds());
    } else {
      time.set('hour', 23);
      time.set('minute', 59);
      time.set('second', 59);
    }
  }

  return time.format('x');
}
