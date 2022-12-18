<template>
  <div class="read-article-container">
    <Nav></Nav>
    <div class="read-header container wrapper mt20">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>JAVA</el-breadcrumb-item>
        <el-breadcrumb-item>文章详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="read-content wrapper container flex between mt20 mb20">
      <div class="left-aside">
        <div class="aside-operations">
          <el-badge value="12">
            <a class="small-circle opt-item">
              <svg-icon icon-class="like"/>
            </a>
          </el-badge>
          <el-badge value="0">
            <a class="small-circle opt-item">
              <svg-icon icon-class="message"/>
            </a>
          </el-badge>
        </div>
        <div class="article-detail">
          <div class="article-header">
            <div class="article-title">{{ articleInfo.title }}</div>
            <div class="article-avatar mt20">
              <div class="user-info flex-between-center">
                <div class="user-avatar">
                  <el-avatar :src="userInfo.avatar" :size="40"></el-avatar>
                </div>
                <div class="user-right flex-between-center">
                  <div class="user-item">
                    <div>
                      <a href="#" class="i-name">
                        {{ userInfo.nickname }}
                      </a>
                    </div>
                    <el-tooltip class="i-time" effect="dark" content="2022-11-23发布" placement="bottom">
                      <span>{{ articleInfo.pushTime }}</span>
                    </el-tooltip>
                  </div>
                  <div class="user-action">
                    <a href="#" class="follow medium-rect">
                      <svg-icon icon-class="follow"/>
                      关注
                    </a>
                    <a href="#" class="private medium-rect">
                      <svg-icon icon-class="message"/>
                      私信
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="article-abstract">
            <div class="abstr-title">导语</div>
            <div class="abstr-content">
              {{ articleInfo.abstract }}
            </div>
          </div>
          <div class="article-content">
            <mavon-editor
                :value="articleInfo.content"
                :boxShadow="false"
                :toolbarsFlag="false"
                :subfield="false"
                :editable="false"
            >
            </mavon-editor>
          </div>
          <div class="article-copyright">
            <div>
              <span class="copyright-name">文章作者：</span>
              <a href="" class="copyright-val">apple</a>
            </div>
            <div>
              <span class="copyright-name">文章链接：</span>
              <a href="" class="copyright-val">https://www.baidu.com</a>
            </div>
          </div>
          <div class="article-operation">
            <div class="tags">
              <el-tag
                  class="tag-item"
                  v-for="(tag,index) in articleInfo.tags"
                  :key="index"
                  size="small"
              >
                {{ tag }}
              </el-tag>
            </div>
          </div>
          <div class="pagination-post">
            <div class="post full" v-if="articleInfo.topArticle">
              <a href="#">
                <img :src="articleInfo.topArticle.pic" alt="" class="post-cover">
                <div class="post-info" style="text-align: left">
                  <div class="label">
                    <i class="el-icon-d-arrow-left"></i>
                    上一篇
                  </div>
                  <div class="post-title">{{ articleInfo.topArticle.title }}</div>
                </div>
              </a>
            </div>
            <div class="post full" v-if="articleInfo.bottomArticle">
              <a href="#">
                <img :src="articleInfo.bottomArticle.pic" alt="" class="post-cover">
                <div class="post-info" style="text-align: right">
                  <div class="label">
                    下一篇
                    <i class="el-icon-d-arrow-right"></i>
                  </div>
                  <div class="post-title">{{ articleInfo.bottomArticle.title }}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="article-recommend">
          <p class="title-theme">推荐文章</p>
          <Recommend
              class="mt10"
              :slides-per-group="4"
              :slides-per-view="4"
          ></Recommend>
        </div>
        <Comment class="article-comment"></Comment>
      </div>
      <div class="right-aside">
        <AuthorCard></AuthorCard>
        <HotArticle class="mt20"></HotArticle>
      </div>
    </div>
    <FootWaveLine></FootWaveLine>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Recommend from "@/components/Carousel/Recommend";
import HotArticle from "@/components/HotArticle";
import AuthorCard from "@/components/UserCard/AuthorCard";
import Comment from "@/components/Comment";
import FootWaveLine from "@/components/Footer/FootWaveLine";

export default {
  name: "ReadArticle",
  components: {FootWaveLine, Comment, AuthorCard, HotArticle, Recommend, Nav},
  data() {
    return {
      articleInfo: {
        title: "人最大的清醒就是认识到自己的局限性",
        abstract: "国外有句名谚：“创业就是命运跟我们开着一连串玩笑，玩笑背后是一串念头，念头背后是一套算法。”结论是：要创业也要有实力。这实力是什么呢？就是看你有没有本事和眼光。除了要求人們具有逻辑、",
        content: "国外有句名谚：“创业就是命运跟我们开着一连串玩笑，玩笑背后是一串念头，念头背后是一套算法。”结论是：要创业也要有实力。这实力是什么呢？就是看你有没有本事和眼光。除了要求人們具有逻辑、",
        pushTime: "1个月前",
        tags: ["java", "php"],
        topArticle: {
          title: "这是上一篇文章",
          pic: "image/20221122113935.jpg"
        },
        bottomArticle: {
          title: "这是下一篇文章",
          pic: "/image/20221122114154.jpg"
        }
      },
      userInfo: {
        avatar: "/image/avatar.jpg",
        nickname: "apple",
      }
    }
  }
}
</script>

<style lang="less" scoped>
.read-article-container {
  .read-content {
    .aside-operations {
      position: fixed;
      top: 250px;
      margin-left: -70px;
      z-index: 10;
      display: flex;
      flex-direction: column;

      .opt-item {
        margin-bottom: 15px;
        background: #9d7979;
        width: 40px;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
      }
    }

    .article-detail {
      padding: 20px 20px;
      overflow: hidden;
      border-radius: 8px;
      box-shadow: var(--main-box-show);
      background: var(--main-bg-color);

      .article-header {
        padding-bottom: 18px;
        border-bottom: 1px solid #efefef;
        position: relative;

        .article-title {
          font-size: 22px;
          font-weight: 700;
          color: #4e5358;
        }

        .article-avatar {
          .user-info {
            height: 40px;

            .user-avatar {
              width: 40px;
              height: 40px;
              overflow: hidden;
            }

            .user-right {
              width: 100%;
              margin-left: 8px;

              .user-item {
                .i-name {
                  color: #4e5358;
                }

                .i-name:hover {
                  color: #ff5473;
                }

                .i-time {
                  color: #999;
                  font-size: 12px;
                }
              }

              .user-action {
                line-height: 40px;

                .follow {
                  color: #ff5473;
                  background: rgba(255, 84, 115, .1);
                }

                .private {
                  color: #2997f7;
                  background: rgba(41, 151, 247, .1);
                  margin-left: 8px;
                }
              }
            }
          }
        }
      }

      .article-header:after {
        content: '';
        position: absolute;
        width: 80px;
        height: 3px;
        background: black;
        bottom: -3px;
        border-radius: 2px;
      }

      .article-abstract {
        margin-top: 15px;
        padding: 15px;
        color: #db7c22;
        border: 1px solid #ffbb76;
        background: #fffcef;
        border-radius: 4px;

        .abstr-title {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 10px;
        }

        .abstr-content {
          font-size: 15px;
        }
      }

      .article-content {
        margin-top: 15px;
      }

      .article-copyright {
        position: relative;
        margin-top: 40px;
        margin-bottom: 10px;
        font-size: .875rem;
        line-height: 2;
        padding: 0.625rem 1rem;
        border: 1px solid #eee;

        .copyright-name {
          color: #49b1f5;
          font-weight: 700;
        }

        .copyright-val {
          text-decoration: underline;
          color: #99a9bf;
        }
      }

      .article-operation {
        .tags {
          .tag-item {
            margin-right: 10px;
          }
        }
      }

      .pagination-post {
        margin-top: 40px;
        overflow: hidden;
        width: 100%;
        background: #000;
        display: flex;

        .post-cover {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: .4;
          transition: all 2s;
          object-fit: cover;
          overflow: hidden;
        }

        .post-info {
          position: absolute;
          top: 50%;
          padding: 20px 40px;
          width: 100%;
          transform: translateY(-50%);
          line-height: 2;
          font-size: 14px;

          .label {
            font-size: 15px;
            color: #fff;
          }

          .post-title {
            font-weight: 600;
            color: #fff;
          }
        }

        .post {
          position: relative;
          height: 150px;
          overflow: hidden;

          a {
            position: relative;
            display: block;
            overflow: hidden;
            height: 150px;
            color: #4c4948;
          }
        }

        .post:hover .post-cover {
          opacity: 1;
          transform: scale(1.1);
        }

        .full {
          width: 100%;
        }
      }
    }

    .article-recommend {
      margin-top: 20px;
    }
  }
}

@media screen and (max-width: 990px) {
  .read-article-container {
    .read-content {
      .aside-operations {
        display: none;
      }
    }
  }
}
</style>