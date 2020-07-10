# Graphql API

## エンドポイント

`https://lo-beam.com/api/graph/v1`

## 認証

認証には Bearer トークン形式を用います。 `Authorization` ヘッダに `Bearer YOUR_TOKEN` を含めた POST リクエストを作成してください。

トークンは、LoBeam の [管理者コンソール](https://lo-beam.com/manager/api) から取得できます。

## サンプルクエリ

### スタッフ

```graphql
{
  staffs {
    id
    displayName
    name
    pictureUrl
  }
}
```

### セッション履歴

```graphql
{
  sessions {
    id
    avoidHighways
    building
    createdAt
    currentLocation
    currentLocationUpdatedAt
    destination
    destinationText
    distance
    duration
    initialLocation
    origin
    phone
    isActive
    status
    organization {
      brand
      serviceName
      websiteUrl
    }
    staff {
      id
      displayName
    }
  }
}
```

### 使用量

```graphql
{
  usages {
    sessionCount
    smsCount
  }
}
```

### フィードバック

```
{
  feedbacks {
    staffId
    ratings
  }
}
```
