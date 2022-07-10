# git

## 제 커밋 기록이 깃허브에 표시되지 않습니다

깃허브 커밋에서 프로필 사진이 공백으로 표시되는 거라면, 깃에 설정된 이메일이 깃허브에 등록되어있지 않아서 생기는 문제입니다.

```sh
$ git config --global user.name "Your Name"
$ git config --global user.email you@example.com
```

깃을 처음 설치하실 때 사용하셨던 이메일을 [깃허브 이메일 설정 페이지](https://github.com/settings/emails)에 등록하시면 됩니다.

---

만약 커밋 페이지에서 프로필로 연결은 되는데 프로필에 표시되지 않는 거라면 원인은 크게 두가지입니다.
메인 브랜치가 아닌 경우도 있고 비공개 레포지토리고 설정이 안 되어있는 경우도 있습니다.

먼저 메인 브랜치가 아닌 경우 프로필 페이지에서는 보이지 않습니다.
이건 바꿀 수 없습니다.

비공개 레포지토리의 경우 설정이 필요한데, 깃허브 프로필 페이지의 컨트리뷰션 설정(`Contribution settings`)에서 `Private contributions`를 활성화하시면 됩니다.
