# The upload component for Amaze UI React


需引入的基础库文件：
webapi.openspeech.cn/socket.io/socket.io.js /* 用于websocket通信的基础包 */
webapi.openspeech.cn/js/connection/connection.js /* 封装消息数据包 */
webapi.openspeech.cn/js/log/log.js /* 打印调试日志的数据包 */
webapi.openspeech.cn/js/session/session.js /* 管理会话逻辑 */
webapi.openspeech.cn/js/session/sessioninfo.js /* 会话数据管理 */
webapi.openspeech.cn/js/session/iat.js /* 听写业务流程 */

可选的扩展库文件：
webapi.openspeech.cn/js/common/adpcm.js /* adpcm音频压缩，音频压缩比4:1 */
webapi.openspeech.cn/js/common/igzip.js /* gzip压缩 */
webapi.openspeech.cn/js/common/speex.min.js /* speex压缩 */
webapi.openspeech.cn/js/common/vad.js /* 前后端点检测 */