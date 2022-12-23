// 最新ツイート順に切り替えるためのURL
const NEWEST_URL = 'https://twitter.com/i/timeline?include_available_features=1&include_entities=1&reset_error_state=false';
// 現在のURLが最新ツイート順のURLであるかどうかを判定
if (location.href !== NEWEST_URL) {
    // 最新ツイート順に切り替える
    location.href = NEWEST_URL;
}
