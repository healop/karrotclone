package com.clone.karrotbackend.model; // ✅ 올바른 패키지 설정!

import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name = "community")
public class Board {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long articleId;
  private String title;
  private int viewCount;

  private String content;
  private String userId; // 사용자 아이디
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

  public int getViewCount() {
    return viewCount;
  }

  public LocalDateTime getCreatedAt() {
    return createdAt;
  }

  public LocalDateTime getModifiedAt() {
    return modifiedAt;
  }
}