package com.mainproejct.server.reply.dto;

import com.mainproejct.server.place.entity.Place;
import lombok.AllArgsConstructor;
import lombok.Getter;

public class ReplyDto {
    @Getter
    public static class post {
        String context;
        double score;
        String replyImage;
    }

    @Getter
    public static class patch {
        long replyId;

        String context;
        double score;
        String replyImage;
    }

    @AllArgsConstructor
    @Getter
    public static class response {
        long replyId;

        String context;
        double score;
        String replyImage;

        Long placeId;

    }
}
