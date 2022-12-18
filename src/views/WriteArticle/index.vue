<template>
  <div class="write-article-container">
    <Nav></Nav>
    <div class="wrapper container">
      <div class="article-edit">
        <el-form ref="form" :model="writeForm" class="article-form">
          <div class="content-layout show">
            <el-input class="title"
                      v-model="writeForm.title"
                      placeholder="输入文章标题"
                      minlength="5"
                      maxlength="20"
                      show-word-limit
            ></el-input>
            <el-input class="abstract mt25"
                      v-model="writeForm.abstract"
                      placeholder="输入文章导语"
                      maxlength="50"
                      show-word-limit
            ></el-input>
            <mavon-editor class="content"
                          :value="writeForm.content"
                          :boxShadow="false"
                          :toolbarsFlag="true"
                          :subfield="false"
                          :editable="true"
            >
            </mavon-editor>
          </div>
          <div class="option-layout show">
            <el-form-item label="文章来源:">
              <el-radio v-model="writeForm.source" label="0">原创</el-radio>
              <el-radio v-model="writeForm.source" label="1">转载</el-radio>
            </el-form-item>
            <el-form-item label="文章分类:">
              <el-select v-model="writeForm.categoryId" size="small" clearable placeholder="请选择">
                <el-option
                    v-for="item in categoryList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="文章标签:" class="opt-tag">
              <el-tag
                  :key="tag"
                  v-for="tag in writeForm.dynamicTags"
                  closable
                  :disable-transitions="false"
                  @close="handleClose(tag)">
                {{ tag }}
              </el-tag>
              <el-input
                  class="input-new-tag"
                  v-if="tagVisible"
                  v-model="tagValue"
                  ref="saveTagInput"
                  size="small"
                  @keyup.enter.native="handleInputConfirm"
                  @blur="handleInputConfirm"
              >
              </el-input>
              <el-button v-else class="button-new-tag" size="small" @click="showInput">New Tag</el-button>
            </el-form-item>
            <el-form-item label="文章配图:" class="opt-img">
              <el-upload
                  class="avatar-uploader"
                  action="#"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                <img v-if="writeForm.imageUrl" :src="writeForm.imageUrl" class="avatar" alt="">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="文章推荐:" class="opt-recommend">
              <el-button size="small" @click="dialogVisible=true">添加文章</el-button>
              <el-dialog
                  :visible.sync="dialogVisible"
                  :before-close="handleDialogClose"
                  title="设置相关文章"
                  width="900px"
              >
                <div class="add-article">
                  <div class="add-content">
                    <div class="source-area">
                      <div class="search-area">
                        <div class="one-line flex-between-center">
                          <el-input v-model="searchVal" size="small"></el-input>
                        </div>
                        <div class="two-line flex-between-center">
                          <el-select v-model="searchCategoryId" size="small" clearable placeholder="请选择">
                            <el-option
                                v-for="item in categoryList"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                            </el-option>
                          </el-select>
                          <el-button size="small" type="primary">搜索</el-button>
                        </div>
                      </div>
                      <div class="result-area">
                        <el-table
                            ref="multipleTable"
                            :data="sourceData"
                            @selection-change="handleTableChange"
                            size="small"
                        >
                          <el-table-column type="selection"></el-table-column>
                          <el-table-column label="标题" width="200px" show-overflow-tooltip>
                            <template slot-scope="scope">{{ scope.row.title }}</template>
                          </el-table-column>
                          <el-table-column label="发布时间" width="120px">
                            <template slot-scope="scope">{{ scope.row.pushTime }}</template>
                          </el-table-column>
                          <el-table-column label="作者" width="100px">
                            <template slot-scope="scope">{{ scope.row.author }}</template>
                          </el-table-column>
                        </el-table>
                        <el-pagination
                            style="text-align: center;margin-top: 15px"
                            background
                            layout="prev, pager, next"
                            :total="60">
                        </el-pagination>
                      </div>
                    </div>
                    <div class="target-area">
                      <ul>
                        <li v-for="(item,index) in targetData" :key="index" class="target-item flex-between-center">
                          <div class="i-left">
                            <a href="#" class="title">{{ item.title }}</a>
                          </div>
                          <div class="i-right">
                            <a href="#" @click.prevent="removeTarget(item)" class="remove-btn">删除</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </el-dialog>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
    <div class="post-settings">
      <div class="settings">
        <div class="wrapper container flex-between-center">
          <div class="post-left"></div>
          <div class="post-right">
            <a href="#" class="draft btn">保存草稿</a>
            <a href="#" class="push btn ml20">提交发布</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: "WriteArticle",
  components: {Nav},
  data() {
    return {
      tagVisible: false,
      tagValue: '',
      dialogVisible: false,

      writeForm: {
        title: "",
        abstract: "",
        content: "",
        imageUrl: "",
        dynamicTags: [],
        categoryId: 0,
        source: 0,
      },
      categoryList: [
        {
          id: 0,
          name: "请选择"
        },
        {
          id: 1,
          name: "java"
        },
        {
          id: 2,
          name: "php"
        }
      ],
      searchVal: "",
      searchCategoryId: 0,
      sourceData: [
        {
          id: 1,
          title: '测试标题1',
          pushTime: "2022-11-12",
          author: "apple"
        },
        {
          id: 2,
          title: '测试标题2',
          pushTime: "2022-11-12",
          author: "apple"
        },
        {
          id: 3,
          title: '测试标题3',
          pushTime: "2022-11-12",
          author: "apple"
        }
      ],
      targetData: []
    }
  },
  methods: {
    handleClose(tag) {
      this.writeForm.dynamicTags.splice(this.writeForm.dynamicTags.indexOf(tag), 1);
    },
    showInput() {
      this.tagVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.tagValue;
      if (inputValue) {
        if (!this.writeForm.dynamicTags.includes(inputValue)) {
          this.writeForm.dynamicTags.push(inputValue);
        }
      }
      this.tagVisible = false;
      this.tagValue = '';
    },
    handleAvatarSuccess(res, file) {
      this.writeForm.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },

    handleDialogClose(done) {
      done()
    },
    handleTableChange(val) {
      this.targetData = val
    },
    removeTarget(item) {
      this.sourceData.forEach(i => {
        if (item.id === i.id) {
          this.$refs.multipleTable.toggleRowSelection(i, false)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.write-article-container {
  .article-edit {
    .article-form {
      padding: 20px 0;
    }

    .content-layout {
      /deep/ .el-input__inner {
        border: 0;
        padding: 0;
      }

      .title {
        font-size: 20px !important;
      }

      .title, .abstract {
        position: relative;
        border-bottom: 2px solid #efefef;
      }

      .title:after {
        content: "";
        position: absolute;
        height: 2px;
        background: #F56C6C;
        width: 0;
        transition: 2s ease all;
        left: 0;
        bottom: -2px;
        border-radius: 2px;
      }

      .abstract:after {
        content: "";
        position: absolute;
        height: 2px;
        background: #409EFF;
        width: 0;
        transition: 2s ease all;
        left: 0;
        bottom: -2px;
        border-radius: 2px;
      }

      .title:hover:after, .abstract:hover:after {
        width: 100%;
        transition: 2s ease all;
      }

      .content {
        margin-top: 30px;
      }
    }

    .option-layout {
      margin-top: 30px;

      .opt-tag {
        .el-tag {
          margin-right: 10px;
        }

        .button-new-tag {
          height: 32px;
          line-height: 30px;
          padding-top: 0;
          padding-bottom: 0;
        }

        .input-new-tag {
          width: 80px;
          vertical-align: bottom;
        }
      }

      .opt-img {
        .avatar-uploader {
          /deep/ .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
          }

          /deep/ .el-upload:hover {
            border-color: #409EFF;
          }
        }

        .avatar-uploader-icon {
          font-size: 28px;
          color: #8c939d;
          width: 178px;
          height: 178px;
          line-height: 178px;
          text-align: center;
        }

        .avatar {
          width: 178px;
          height: 178px;
          display: block;
        }
      }

      .opt-recommend {
        .add-article {
          .add-content {
            display: flex;

            .source-area {
              .search-area {
                padding: 10px;
                border: 1px solid #d0d9e0;
              }

              .result-area {
                margin-top: 20px;
                padding: 10px;
                border: 1px solid #d0d9e0;
              }
            }

            .target-area {
              padding: 10px;
              flex: 1;
              border: 1px solid #d0d9e0;

              .target-item {
                overflow: hidden;
                border-bottom: 1px solid #E8E8E8;
                height: 24px;
                line-height: 24px;
                padding: 2px;
                white-space: nowrap;
                text-overflow: ellipsis;

                .i-left {
                  .title {
                    color: #369;
                    font-size: 12px;
                  }
                }

                .i-right {
                  a {
                    color: SaddleBrown;
                    font-size: 12px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .post-settings {
    height: 60px;
    line-height: 60px;

    .settings {
      position: fixed;
      width: 100%;
      background: var(--main-bg-color);
      z-index: 9999;
      bottom: 0;
      left: 0;
    }

    .post-right {
      .btn {
        display: inline-block;
        width: 100px;
        height: 34px;
        line-height: 34px;
        border-radius: 17px;
        text-align: center;
        color: #fff;
        font-size: 14px;
      }

      .draft {
        background: linear-gradient(135deg, #60e464 10%, #5cb85b 100%);;
      }

      .push {
        background: linear-gradient(135deg, #59c3fb 10%, #268df7 100%);;
      }
    }
  }

  .show {
    padding: 15px 30px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 0 10px rgba(116, 116, 116, 0.08);
  }
}
</style>