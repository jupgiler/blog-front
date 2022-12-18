<template>
  <div class="comment-container">
    <div class="comment-title">
      <p class="title-theme">评论</p>
    </div>
    <div class="comment-box" ref="comment-box">
      <div class="comment-respond flex" ref="respond-box">
        <div class="comment-user" v-if="!isRespond">
          <el-avatar :src="userInfo.avatar" fit="cover"></el-avatar>
        </div>
        <div class="comment-area">
          <div class="comment-text">
            <el-input
                type="textarea"
                :rows="3"
                placeholder="说点什么吧..."
                v-model="textarea"
            >
            </el-input>
          </div>
          <div class="comment-ctrl flex-between-center">
            <div class="comment-tips-left"></div>
            <div class="comment-tips-right">
              <el-button type="info" round v-show="isRespond" @click.prevent="removeRespond" size="small">取消回复
              </el-button>
              <el-button type="primary" round class="send-comment" size="small">发表评论</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="msg-comments" ref="list-dom">
        <div class="comment-show">
          <ul>
            <li class="comment-item" v-for="(item,index) in comments" :key="item.id">
              <div class="root-comment flex">
                <div class="comment-avatar">
                  <el-avatar :src="item.avatar" fit="cover" :size="40"></el-avatar>
                </div>
                <div class="comment-info">
                  <div class="comment-header flex-between-center">
                    <a href="#" class="i-user">{{ item.username }}</a>
                    <div class="i-time">
                      {{ item.createTime }}
                    </div>
                  </div>
                  <div class="comment-content">
                    {{ item.content }}
                  </div>
                  <div class="comment-footer">
                    <div class="msg-replay">
                      <a href="#" class="msg-like">
                        <svg-icon icon-class="like"/>
                        顶
                        <span v-if="item.likeCount">({{ item.likeCount }})</span>
                      </a>
                      <a href="#" @click.prevent="respondMsg">
                        <svg-icon icon-class="message"/>
                        回复
                        <span v-if="item.replyCount">({{ item.replyCount }})</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <ul>
                <li v-for="(sub,index) in item.subComments" :key="sub.id" class="sub-comment-item flex">
                  <div class="comment-avatar">
                    <el-avatar :src="sub.avatar" fit="cover" :size="30"></el-avatar>
                  </div>
                  <div class="comment-info">
                    <div class="comment-header flex-between-center">
                      <a href="#" class="i-user">{{ sub.username }}</a>
                      <div class="i-time">
                        {{ sub.createTime }}
                      </div>
                    </div>
                    <div class="comment-content">
                      <a href="#" class="i-user">@{{ sub.replyUser }}</a>
                      {{ sub.content }}
                    </div>
                    <div class="comment-footer">
                      <a href="#" class="msg-like">
                        <svg-icon icon-class="like"/>
                        顶
                      </a>
                      <a href="#" @click.prevent="respondMsg" class="msg-replay">
                        <svg-icon icon-class="message"/>
                        回复
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="comment-empty" v-if="comments.length === 0">
          <el-empty description="暂无评论"></el-empty>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  data() {
    return {
      isRespond: false,
      textarea: "",
      userInfo: {
        avatar: "/image/avatar.jpg",
        nickname: "apple",
      },
      comments: [
        {
          id: 1,
          avatar: "/image/avatar.jpg",
          username: "apple",
          createTime: "2022-09-03 14:00:00",
          content: "人生就是由欲望不满足而痛苦和满足之后无趣这两者所构成。你满心期待着未来的某个快乐，未必理智认知到了它是短暂的而不会持久。人的一生的本质是痛苦，快乐只是昙花一现",
          likeCount: 10,
          replyCount: 5,
          subComments: [
            {
              id: 4,
              avatar: "/image/avatar.jpg",
              username: "apple",
              createTime: "2022-09-03 14:00:00",
              content: "每个人都没有绝对的道德底线，只是诱惑不够。也没有任何一个人能经受得住集体的道德审判。我们要学会宽容，像谅解自己一样谅解别人",
              replyUser: "abcd",
              likeCount: 0,
              replyCount: 0,
            },
            {
              id: 5,
              avatar: "/image/avatar.jpg",
              username: "apple",
              createTime: "2022-09-03 14:00:00",
              content: "如果要别人诚信，首先要自己诚信",
              replyUser: "abcd",
              likeCount: 1,
              replyCount: 5,
            },
          ]
        },
        {
          id: 2,
          avatar: "/image/avatar.jpg",
          username: "apple",
          createTime: "2022-09-03 14:00:00",
          content: "竹之可贵，在于有节。人之可贵，在于有诚。诚信善行，可尊达贵",
          likeCount: 2,
          replyCount: 5,
          subComments: [
            {
              id: 6,
              avatar: "/image/avatar.jpg",
              username: "apple",
              createTime: "2022-09-03 14:00:00",
              content: "任何一种不为集体利益打算的行为，都是自杀的行为，它对社会有害",
              replyUser: "abcd",
              likeCount: 5,
              replyCount: 0,
            },
          ]
        },
        {
          id: 3,
          avatar: "/image/avatar.jpg",
          username: "apple",
          createTime: "2022-09-03 14:00:00",
          content: "要有朴实的心态，言语不要自夸高大，关心他人而温言，实在而不失大气",
          likeCount: 0,
          replyCount: 0,
        }
      ]
    }
  },
  methods: {
    // 回复
    respondMsg(e) {
      e.currentTarget.parentNode.appendChild(this.$refs["respond-box"])
      this.isRespond = true
    },
    //取消回复
    removeRespond() {
      this.isRespond = false
      this.$refs["comment-box"].insertBefore(this.$refs["respond-box"], this.$refs["list-dom"])
    }
  }
}
</script>

<style lang="less" scoped>
.comment-container {
  .comment-title {
    padding: 15px 0;
  }

  .comment-box {
    background: white;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 0 10px rgba(116, 116, 116, 0.08);
    overflow: hidden;

    .comment-respond {
      width: 100%;
      margin-top: 10px;

      .comment-user {
        margin-right: 5px;
      }

      .comment-area {
        width: 100%;

        .comment-ctrl {
          margin-top: 8px;
        }
      }
    }

    .msg-comments {
      margin-top: 30px;

      .comment-show {
        .comment-item {
          width: 100%;
          vertical-align: top;
          padding: 10px 0;
          border-bottom: 1px solid #efefef;

          .sub-comment-item {
            margin-left: 40px;
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px solid #efefef;
          }

          .comment-avatar {
            margin-right: 8px;
          }

          .comment-info {
            flex: 1;

            .i-user {
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              cursor: pointer;
              font-weight: 700;
              color: #369;
              font-size: 16px;
            }


            .i-time {
              font-size: 14px;
              color: #999;
            }

            .comment-content {
              margin: 5px 0;
              font-size: 14px;
              color: #303133;
            }

            .comment-footer {
              a {
                font-size: 12px;
                color: #999;
                margin-right: 8px;
              }
            }
          }
        }
      }
    }
  }
}
</style>