package com.clone.karrotbackend.model; // ✅ 올바른 패키지 설정!

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.*;

@Entity
@Table(name = "community")
public class Board {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @JsonProperty(access = JsonProperty.Access.READ_ONLY) // articleId는 읽기 전용으로
  private Long articleId;
  private String title;
  private int viewCount;
  private int likeCount;

  private String content;
  private String userId; // 사용자 아이디
  private String regionId;
  private String categoryId;
  private String categoryOptions;

  @Version
  private Long version;

  private LocalDateTime createdAt;
  private LocalDateTime modifiedAt;

  @Override
  public String toString() {
    return "Board{" +
        "articleId=" + articleId +
        ", title='" + title + '\'' +
        ", viewCount=" + viewCount +
        ", content='" + content + '\'' +
        ", userId='" + userId + '\'' +
        ", createdAt=" + createdAt +
        ", modifiedAt=" + modifiedAt +
        '}';
  }
  // 생성자 추가

  public Board() {
  }

  public Long getArticleId() {
    return articleId;
  }

  public String getTitle() {
    return title;
  }

  public String getContent() {
    return content;
  }

  public String getUserId() {
    if (userId == null) {
      throw new IllegalStateException("User ID is not set");
    }
    return userId;
  }

  public String getRegionId() {
    return regionId;
  }

  public Long getVersion() {
    return version;
  }

  public int getViewCount() {
    return viewCount;
  }

  public int getLikeCount() {
    return likeCount;
  }

  public String getCategoryId() {
    return categoryId;
  }

  public String getCategoryOptions() {
    return categoryOptions;
  }

  public LocalDateTime getCreatedAt() {
    return createdAt;
  }

  public LocalDateTime getModifiedAt() {
    return modifiedAt;
  }

  public void setArticleId(Long articleId) {
    this.articleId = articleId;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public void setRegionId(String regionId) {
    this.regionId = regionId;
  }

  public void setCategoryId(String categoryId) {
    this.categoryId = categoryId;
  }

  public void setCategoryOptions(String categoryOptions) {
    this.categoryOptions = categoryOptions;
  }

  public void setLikeCount(int likeCount) {
    if (likeCount < 0) {
      throw new IllegalArgumentException("Like count cannot be negative");
    }
    this.likeCount = likeCount;
  }

  public void setUserId(String userId) {
    if (userId == null || userId.isEmpty()) {
      throw new IllegalArgumentException("User ID cannot be null or empty");
    }
    this.userId = userId;
  }

  public void setViewCount(int viewCount) {
    if (viewCount < 0) {
      throw new IllegalArgumentException("View count cannot be negative");
    }
    this.viewCount = viewCount;
  }

  public void setCreatedAt(LocalDateTime createdAt) { // 필요한가?
    if (createdAt == null) {
      throw new IllegalArgumentException("Created at cannot be null");
    }
    this.createdAt = createdAt;
  }

  public void setModifiedAt(LocalDateTime modifiedAt) {
    if (modifiedAt == null) {
      throw new IllegalArgumentException("Modified at cannot be null");
    }
    this.modifiedAt = modifiedAt;
  }

  public Board(String title, String content, String userId) {
    this.title = title;
    this.content = content;
    setUserId(userId); // 사용자 ID 설정
    this.viewCount = 0; // 초기 조회수는 0
    this.createdAt = LocalDateTime.now(); // 생성 시각 설정
    this.modifiedAt = LocalDateTime.now(); // 수정 시각 설정
  }
}