export type IndustryType =
  | 'オフィスビル'
  | '製造業（昼稼働）'
  | '製造業（昼夜稼働）'
  | '食品スーパー'
  | '医療機関'
  | '卸・小売店'
  | '学校'
  | 'ホテル・旅館'

export type IndustryOption = {
  label: string
  value: IndustryType
}

export const industryOptions: IndustryOption[] = [
  {
    label: 'オフィスビル',
    value: 'オフィスビル',
  },
  {
    label: '製造業（昼稼働）',
    value: '製造業（昼稼働）',
  },
  {
    label: '製造業（昼夜稼働）',
    value: '製造業（昼夜稼働）',
  },
  {
    label: '食品スーパー',
    value: '食品スーパー',
  },
  {
    label: '医療機関',
    value: '医療機関',
  },
  {
    label: '卸・小売店',
    value: '卸・小売店',
  },
  {
    label: '学校',
    value: '学校',
  },
  {
    label: 'ホテル・旅館',
    value: 'ホテル・旅館',
  },
]
